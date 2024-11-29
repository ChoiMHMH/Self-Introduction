import Image from "next/image";
import styles from "./left_img_item.module.css";

export type ModalCardItemProps = {
  cardTitle?: string;
  cardDescription?: string;
  cardImage?: string;
};

function LeftImgItem({
  cardTitle,
  cardDescription,
  cardImage,
}: ModalCardItemProps) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image_placeholder}
        src="/github.svg"
        alt={cardImage || "카드이미지"}
        width={400}
        height={400}
      />
      <div className={styles.text_container}>
        <h3 className={styles.card_title}>{cardTitle}</h3>
        <p className={styles.card_description}>{cardDescription}</p>
      </div>
    </div>
  );
}

export default LeftImgItem;
