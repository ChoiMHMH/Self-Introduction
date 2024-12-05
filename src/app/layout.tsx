import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오",
  description: "최민혁 포트폴리오 입니다.",
  openGraph: {
    title: "최민혁 포트폴리오",
    description: "최민혁 포트폴리오 입니다.",
    images: ["/portfolio.png"],
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
