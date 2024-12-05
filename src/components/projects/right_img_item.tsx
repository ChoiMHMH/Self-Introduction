"use client";
import Image from "next/image";
import { ModalCardItemProps } from "./left_img_item";
import styles from "./right_img_item.module.css";
import { useState } from "react";
import ImageModal from "./image_modal";

function RightImgItem({
  children,
  cardTitle,
  cardDescription,
  cardImage,
}: ModalCardItemProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.card}>
        {isImageLoading && <div className={styles.image_skeleton}></div>}
        <Image
          className={`${styles.image_placeholder} ${
            isImageLoading ? styles.hidden : ""
          }`}
          src={cardImage}
          alt={cardImage || "카드이미지"}
          width={400}
          height={400}
          onLoad={() => setIsImageLoading(false)}
          onClick={() => setIsModalOpen(true)}
        />
        <div className={styles.text_container}>
          <h3 className={styles.card_title}>{cardTitle}</h3>
          <ul className={styles.card_description}>
            {cardDescription.map((description, idx) => (
              <li key={idx}>{description}</li>
            ))}
          </ul>
          {children}
        </div>
      </div>
      {isModalOpen && (
        <ImageModal
          imageSrc={cardImage}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default RightImgItem;
