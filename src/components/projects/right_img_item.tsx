import Image from "next/image";
import { ModalCardItemProps } from "./left_img_item";
import styles from "./right_img_item.module.css";

function RightImgItem({
  cardTitle,
  cardDescription,
  cardImage,
}: ModalCardItemProps) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image_placeholder}
        src={cardImage || ""}
        alt={cardImage || "카드이미지"}
        width={400}
        height={400}
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
export default RightImgItem;
