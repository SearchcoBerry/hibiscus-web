import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://hibiscus-web.vercel.app";

export const metadata: Metadata = {
  title: "はいびすかす屋 - Cyber Hibiscus / 電脳扶桑集団",
  description:
    "沖縄を拠点に、Webサイト制作・業務システム開発・運用保守を行う技術屋集団「はいびすかす屋」。赤いハイビスカスのように、果敢に挑戦し、信頼を積み、次々と花を咲かせます。Next.js / TypeScript / Vercel。",
  keywords: [
    "沖縄 Web制作", "沖縄 システム開発", "Web制作 沖縄", "業務システム 沖縄",
    "Next.js", "TypeScript", "Vercel", "受託開発", "中小企業 IT",
    "はいびすかす屋", "Cyber Hibiscus",
  ],
  openGraph: {
    title: "はいびすかす屋 - Cyber Hibiscus / 電脳扶桑集団",
    description:
      "沖縄を拠点に、Webサイト制作・業務システム開発・運用保守を行う技術屋集団。赤いハイビスカスのように、果敢に挑戦し、信頼を積み、次々と花を咲かせます。",
    url: siteUrl,
    siteName: "はいびすかす屋 / Cyber Hibiscus",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
