import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from 'sonner';

let title = 'Social.Sandbox AI版本小红书';
let description = '一个创新的社交平台，用户可以与AI角色互动。';

export const metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={GeistSans.className}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
