import LeftImgItem from "@/components/projects/left_img_item";
import RightImgItem from "@/components/projects/right_img_item";
import ProjectContainer from "@/components/projects/project_container";
import styles from "../page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오 - 롤링페이퍼",
  description: "최민혁 포트폴리오 입니다.",
  openGraph: {
    title: "최민혁 포트폴리오 - 롤링페이퍼",
    description: "최민혁 포트폴리오 입니다.",
    images: ["/portfolio.png"],
  },
};
function RollingPaper() {
  return (
    <ProjectContainer
      title="너글닿기"
      subtitle="롤링페이퍼를 작성하고 볼 수 있습니다. react를 학습하고, 협업 방법을 배우기 위한 프로젝트."
    >
      <a
        className={styles.link}
        href="https://itsbasic-c93d6.web.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        너글닿기 바로가기
      </a>
      <LeftImgItem
        cardTitle="프로젝트 기본 학습"
        cardDescription={[
          "웹 접근성: 시맨틱 태그, 이미지 태그 대체 텍스트 활용",
          "github를 활용한 협업 경험",
          "eslint와 prettier 설정",
        ]}
        cardImage="/github.svg"
      ></LeftImgItem>
      <RightImgItem
        cardTitle="반응형 설정 및 CSS-in-js 경험"
        cardDescription={[
          "전역상태를 이용해 모든 페이지에서 제어 가능한 dark mode, light mode 개발",
          "Desktop-First의 반응형 페이지 제작",
        ]}
        cardImage="/rolling_mode.png"
      ></RightImgItem>
    </ProjectContainer>
  );
}
export default RollingPaper;
