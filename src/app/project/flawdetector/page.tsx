import LeftImgItem from "@/components/projects/left_img_item";
import styles from "./page.module.css";
import RightImgItem from "@/components/projects/right_img_item";

function FlawDetector() {
  return (
    <div className={styles.background}>
      <h1 className=".title">title</h1>
      <h2>subtitle</h2>
      <LeftImgItem></LeftImgItem>
      <RightImgItem></RightImgItem>
    </div>
  );
}
export default FlawDetector;
