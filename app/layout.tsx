import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const NotoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Practice | Ansh",
  description: "This Web App is created by Ansh Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NotoSans.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
