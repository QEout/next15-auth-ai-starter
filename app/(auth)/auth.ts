import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import { getUser } from '@/lib/db/queries';
import { authConfig } from '@/app/(auth)/auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        try {
          const user = await getUser(email);
          if (!user || user.length === 0) return null;
          
          const passwordsMatch = await compare(password, user[0].password!);
          if (passwordsMatch) return user[0] as any;
          
          return null; // 密码不匹配时返回null
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
});
