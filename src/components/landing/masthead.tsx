import styles from "./masthead.module.css";
import DoubleDownButton from "./double_down_button";
function Masthead() {
  return (
    <div id="home" className={styles.background}>
      <div className={styles.container}>
        <h1 className={`${styles.title} font_yang`}>
          최민혁 <br /> 프론트엔드 개발자 포트폴리오
        </h1>
        <div className={styles.description_container}>
          <h2 className={styles.description}>
            핵심을 놓치지 않는 개발자 최민혁입니다.
          </h2>
          <DoubleDownButton />
        </div>
      </div>
    </div>
  );
}
export default Masthead;
