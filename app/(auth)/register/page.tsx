'use client';

import Link from 'next/link';
import { Form } from '@/components/ui/form';
import { SubmitButton } from '@/components/ui/submit-button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { handleRegister } from '../actions';

export default function Register() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-border bg-card px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-2xl font-semibold text-foreground">注册</h3>
          <p className="text-sm text-muted-foreground">
            创建新账号
          </p>
        </div>
        <Form
          action={async (formData: FormData) => {
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;

            const { success, error, message } = await handleRegister(email, password);

            if (success) {
              toast.success('注册成功');
              router.push('/login');
            } else {
              toast.error(message || '注册失败，请稍后重试');
            }
          }}
        >
          <div className="flex flex-col space-y-4 bg-card px-4 py-8 sm:px-16">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                邮箱
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                密码
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <SubmitButton>注册</SubmitButton>
            <p className="text-center text-sm text-muted-foreground">
              已有账号？{' '}
              <Link href="/login" className="font-semibold text-primary hover:text-primary/90">
                立即登录
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
