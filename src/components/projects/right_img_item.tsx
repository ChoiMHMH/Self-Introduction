"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";
import styles from "./right_img_item.module.css";
import ImageModal from "./image_modal";

export type ModalCardItemProps = {
  children?: ReactNode;
  cardTitle: string;
  cardDescription: string[];
  cardImage: string;
};

function RightImgItem({
  children,
  cardTitle,
  cardDescription,
  cardImage,
}: ModalCardItemProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setTooltipPosition({ x: event.clientX + 10, y: event.clientY + 10 });
  };

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <>
      <div className={styles.card}>
        {isImageLoading && <div className={styles.image_skeleton}></div>}
        <div
          className={styles.image_placeholder}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            className={`${styles.image} ${isImageLoading ? styles.hidden : ""}`}
            src={cardImage}
            alt={cardImage || "카드이미지"}
            width={400}
            height={400}
            onLoad={() => setIsImageLoading(false)}
          />
          {tooltipVisible && (
            <div
              className={styles.tooltip}
              style={{
                left: `${tooltipPosition.x + 40}px`,
                top: `${tooltipPosition.y + 10}px`,
              }}
            >
              확대하기
            </div>
          )}
        </div>
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
