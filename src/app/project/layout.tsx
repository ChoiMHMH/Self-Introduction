import Header from "@/components/landing/header";
import Link from "next/link";
import styles from "./page.module.css";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className={styles.header_container}>
        <Link href={"/"} className={styles.header_home_button}>
          Home
        </Link>
      </div>
      {children}
    </div>
  );
}
