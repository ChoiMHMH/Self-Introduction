import LeftImgItem from "@/components/projects/left_img_item";
import RightImgItem from "@/components/projects/right_img_item";
import ProjectContainer from "@/components/projects/project_container";
import styles from "../page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오 - Mogazoa",
  description: "최민혁 포트폴리오 입니다.",
  openGraph: {
    title: "최민혁 포트폴리오 - Mogazoa",
    description: "최민혁 포트폴리오 입니다.",
    images: ["/portfolio.png"],
  },
};
function Mogazoa() {
  return (
    <ProjectContainer
      title="Mogazoa"
      subtitle="다양한 분야의 상품을 리뷰하는 웹 사이트. React-Query와 공용 컴포넌트 학습을 위한 프로젝트."
    >
      <LeftImgItem
        cardTitle="React-Query 를 사용한 api 세팅"
        cardDescription={[
          "반복되는 요청 자동화 : 요청을 보내기 전에 토큰이 있을 경우 Authorization 헤더에 토큰을 추가해주는 intercept생성, error인터셉터 추가",
          "반복되는 요청 추상화 : Content-Type과 토큰의 필요 유무로 apiRequestor 객체 생성, 사용 시 필요한 객체 호출하여 사용",
        ]}
        cardImage="/mogazoa_requestor.png"
      ></LeftImgItem>
      <RightImgItem
        cardTitle="반복되는 코드 최소화를 위한 모달 컨테이너 생성"
        cardDescription={[
          "모달의 개수가 많아짐에 따라 모달 컨테이너를 생성하여 재사용 및 코드 간결화 ",
        ]}
        cardImage="/mogazoa_modal.png"
      >
        <a
          className={styles.link}
          href="https://github.com/Team18-Mogazoa/MOGAZOA/pull/37"
          target="_blank"
          rel="noopener noreferrer"
        >
          연관링크 바로가기
        </a>
      </RightImgItem>
    </ProjectContainer>
  );
}
export default Mogazoa;
