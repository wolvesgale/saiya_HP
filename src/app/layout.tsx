import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社Saiya | イベント出店支援",
  description: "業種・商材を問わず、あらゆるイベント出店ビジネスを支援。場所の確保、商材調達システム、現場販売ノウハウ、パートナー連携まで。東海・関東・関西を中心に全国対応。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
