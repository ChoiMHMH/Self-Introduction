import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    google: "",
    other: {
      "naver-site-verification": "dd319ece8006f1c7ef4f7119816700d07da25477",
    },
  },
  title: "최민혁 포트폴리오",
  description:
    "프론트엔드 개발자 포트폴리오. 핵심을 놓치지 않는 개발자 최민혁입니다.",
  icons: {
    icon: [
      {
        type: "image/png",
        url: "/icon.png",
      },
    ],
  },
  keywords: [
    "최민혁",
    "최민혁 포트폴리오",
    "프론트엔드 개발자",
    "Portfolio",
    "개발자",
    "포트폴리오",
  ],
  applicationName: "최민혁 포트폴리오 - 프론트엔드 개발자",
  creator: "최민혁",
  publisher: "최민혁",
  openGraph: {
    title: "최민혁 포트폴리오",
    description:
      "프론트엔드 개발자 포트폴리오. 핵심을 놓치지 않는 개발자 최민혁입니다.",
    images: ["/thumbnail.png"],
    siteName: "최민혁 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "최민혁 포트폴리오",
    description:
      "프론트엔드 개발자 포트폴리오. 핵심을 놓치지 않는 개발자 최민혁입니다.",
    images: ["/thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-image-preview": "large",
      "max-snippet": 60,
    },
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
          name="application-name"
          content="최민혁 포트폴리오 - 프론트엔드 개발자"
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
