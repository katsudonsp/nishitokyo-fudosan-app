import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "西東京市 不動産管理会社リサーチ",
  description: "東京都西東京市の不動産管理会社・不動産会社を整理するリサーチ用Webアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
