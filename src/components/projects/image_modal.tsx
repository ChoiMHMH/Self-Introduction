"use client";
import { useEffect } from "react";
import styles from "./image_modal.module.css";
import Image from "next/image";

interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
}

function ImageModal({ imageSrc, onClose }: ImageModalProps) {
  useEffect(() => {
    const modalRoot = document.getElementById("modal_root");
    const dialogElement = modalRoot?.querySelector("dialog");

    if (dialogElement) {
      dialogElement.style.overflow = "hidden";
    }

    // ESC 키를 감지하여 모달 닫기
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (dialogElement) {
        dialogElement.style.overflow = "";
      }
    };
  }, [onClose]);

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 방지
      >
        <Image
          width={800}
          height={800}
          src={imageSrc}
          alt="확대된 이미지"
          className={styles.modal_image}
          layout="intrinsic"
        />
        <button className={styles.close_button} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default ImageModal;
