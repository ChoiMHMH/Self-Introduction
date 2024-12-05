import Modal from "@/components/projects/modal";

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
