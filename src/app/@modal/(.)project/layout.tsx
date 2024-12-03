import Modal from "@/components/projects/modal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "project",
  description: "최민혁 포트폴리오 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Modal>{children}</Modal>
    </>
  );
}
