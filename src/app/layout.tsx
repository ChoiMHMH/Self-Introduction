import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오",
  description:
    "최민혁 프론트엔드 개발자 포트폴리오. 핵심을 놓치지 않는 개발자 최민혁입니다.",
  icons: {
    icon: [
      {
        type: "image/png",
        url: "/icon.png",
      },
    ],
  },
  keywords: ["최민혁 포트폴리오", "프론트엔드 개발자"],
  applicationName: "최민혁 포트폴리오",
  openGraph: {
    title: "최민혁 | 포트폴리오",
    description:
      "최민혁 프론트엔드 개발자 포트폴리오. 핵심을 놓치지 않는 개발자 최민혁입니다.",
    images: ["/thumbnail.png"],
    siteName: "최민혁 | 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "최민혁 | 포트폴리오",
    description:
      "최민혁 프론트엔드 개발자 포트폴리오. 핵심을 놓치지 않는 개발자 최민혁입니다.",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="yNsABsjfQqsN429xs02JqHLfNy-FCj6u8I8kIL0-znc"
        />
        <meta
          name="naver-site-verification"
          content="950d1e5989a1aaebf11e3456bd18a132b8cf8f47"
        />
        <meta
          name="keywords"
          content="최민혁, CMH, 포트폴리오, Portfolio, 개발자"
        />
      </head>
      <body>
        <NextTopLoader color="#9e24e6" />
        <div id="modal_root" />
        {children}
        {modal}
      </body>
    </html>
  );
}
