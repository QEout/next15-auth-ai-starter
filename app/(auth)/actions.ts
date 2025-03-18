'use server';

import { getUser, createUser } from '@/lib/db/queries';
import { signIn } from '@/app/(auth)/auth';

export async function handleSignIn(email: string, password: string) {
  try {
    if (!email || !password) {
      return { success: false, error: 'INVALID_INPUT', message: '请填写完整的登录信息' };
    }

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (!result?.error) {
      return { success: true };
    } else {
      return { success: false, error: result.error, message: '登录失败' };
    }
  } catch (error) {
    console.error('SignIn error:', error);
    return { success: false, error: 'INTERNAL_ERROR', message: '邮箱或密码错误' };
  }
}

export async function checkUserExists(email: string) {
  try {
    if (!email) {
      return { exists: false, error: 'INVALID_INPUT', message: '请提供邮箱地址' };
    }

    const user = await getUser(email);
    return { exists: user.length > 0 };
  } catch (error) {
    console.error('Check user error:', error);
    return { error: 'INTERNAL_ERROR', message: '验证用户时发生错误' };
  }
}

export async function handleRegister(email: string, password: string) {
  try {
    if (!email || !password) {
      return { success: false, error: 'INVALID_INPUT', message: '请填写完整的注册信息' };
    }

    const { exists, error, message } = await checkUserExists(email);
    if (error) {
      return { success: false, error, message };
    }
    if (exists) {
      return { success: false, error: 'USER_EXISTS', message: '该邮箱已被注册' };
    }

    await createUser(email, password);
    return { success: true };
  } catch (error) {
    console.error('Register error:', error);
    return { success: false, error: 'INTERNAL_ERROR', message: '注册时发生错误' };
  }
}
