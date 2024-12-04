"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./left_img_item.module.css";

export type ModalCardItemProps = {
  cardTitle: string;
  cardDescription: string[];
  cardImage: string;
};

function LeftImgItem({
  cardTitle,
  cardDescription,
  cardImage,
}: ModalCardItemProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
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
      />
      <div className={styles.text_container}>
        <h3 className={styles.card_title}>{cardTitle}</h3>
        <ul className={styles.card_description}>
          {cardDescription.map((description, idx) => (
            <li key={idx}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftImgItem;
