"use client";
import styles from "./modal.module.css";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";

      if (dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.showModal();
        dialogRef.current.scrollTo({
          top: 0,
        });
      }

      return () => {
        document.body.style.overflow = "";
      };
    }
  }, []);

  if (typeof window === "undefined") {
    return null;
  }

  return createPortal(
    <dialog
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as HTMLElement).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={styles.modal}
      ref={dialogRef}
    >
      {children}
      <Image
        onClick={() => {
          router.back();
        }}
        className={styles.close_button}
        src="/x.svg"
        width={30}
        height={30}
        alt="close icon"
      />
    </dialog>,
    document.getElementById("modal_root") as HTMLElement
  );
}

export default Modal;
