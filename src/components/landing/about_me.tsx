import Image from "next/image";
import styles from "./about_me.module.css";

function AboutMe() {
  return (
    <section id="about_me" className={styles.about_me}>
      <h2 className={`${styles.about_me_title} section_title font_yang`}>
        ABOUT ME
      </h2>
      <div className={styles.profile_container}>
        <div className={styles.profile_item}>
          <div className={styles.icon}>
            <Image src="/user.svg" alt="사용자 아이콘" width={32} height={32} />
          </div>
          <div className={styles.text}>
            <div className={styles.label}>이름</div>
            <div className={styles.value}>최민혁</div>
          </div>
        </div>
        <div className={styles.profile_item}>
          <div className={styles.icon}>
            <Image src="/github.svg" alt="달력 아이콘" width={32} height={32} />
          </div>
          <div className={styles.text}>
            <div className={styles.label}>github</div>
            <div className={styles.value}>
              <a
                className={styles.github_link}
                href="https://github.com/ChoiMHMH"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ChoiMHMH
              </a>
            </div>
          </div>
        </div>
        <div className={styles.profile_item}>
          <div className={styles.icon}>
            <Image
              src="/calender.svg"
              alt="사용자 아이콘"
              width={32}
              height={32}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.label}>생년월일</div>
            <div className={styles.value}>98.05.20</div>
          </div>
        </div>
        <div className={styles.profile_item}>
          <div className={styles.icon}>
            <Image
              src="/phone.svg"
              alt="사용자 아이콘"
              width={28}
              height={28}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.label}>연락처</div>
            <div className={styles.value}>010-8520-2362</div>
          </div>
        </div>
        <div className={styles.profile_item}>
          <div className={styles.icon}>
            <Image src="/mail.svg" alt="사용자 아이콘" width={32} height={32} />
          </div>
          <div className={styles.text}>
            <div className={styles.label}>이메일</div>
            <div className={styles.value}>kasamin98@naver.com</div>
          </div>
        </div>
        <div className={styles.profile_item}>
          <div className={styles.icon}>
            <Image
              src="/education.svg"
              alt="사용자 아이콘"
              width={32}
              height={32}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.label}>학력</div>
            <div className={styles.value}>
              연성대학교
              <br />
              (컴퓨터소프트웨어과)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
