import LeftImgItem from "@/components/projects/left_img_item";
import RightImgItem from "@/components/projects/right_img_item";
import ProjectContainer from "@/components/projects/project_container";
import styles from "../page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오 - 플로디텍터",
  description: "최민혁 포트폴리오 입니다.",
  openGraph: {
    title: "최민혁 포트폴리오 - 플로디텍터",
    description: "최민혁 포트폴리오 입니다.",
    images: ["/portfolio.png"],
  },
};
function FlawDetector() {
  return (
    <ProjectContainer
      title="플로디텍터"
      subtitle="플로디텍터는 Llama 3 기반의 LLM API를 활용하여 코드를 분석하고, 취약점 관련 기사를 크롤링 및 번역하여 제공하는 플랫폼입니다. 제가 개발 한 부분은 아래와 같습니다. "
    >
      <a
        className={styles.link}
        href="https://flaw-detector-team-yes.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        플로디텍터 바로가기
      </a>
      <LeftImgItem
        cardTitle="CNNVD(중국 보안 취약점 사이트)의 취약점 DB의 대한 뉴스 기사 크롤링"
        cardDescription={[
          "CNNVD가 SPA이기 때문에 Puppeteer 라이브러리를 사용해 데이터 추출",
          "selenium : 파이썬 코드는 유지보수 힘들 것으로 생각되어 배제(팀 전부 JS)",
          "cheerio :  SPA에서는 부적합",
          "때문에 puppeteer 라이브러리 사용",
        ]}
        cardImage="/crawling.png"
      ></LeftImgItem>

      <RightImgItem
        cardTitle="크롤링 한 데이터 번역"
        cardDescription={[
          "제공받은 llm(llama3), papago와 같은 번역 api, llm api 등 여러 방법 중 비용 절감을 위해 제공받은 llm 사용 ",
          "google translation도 사용해봤으나 2페이지 남기고 무료 한도 초과",
          "때문에 제공받은 llama3 사용",
        ]}
        cardImage="/automatic.png"
      ></RightImgItem>

      <LeftImgItem
        cardTitle="크롤링 & 번역 자동화"
        cardDescription={[
          "github action을 사용하여 크롤링 &번역 자동화",
          "hugging face, Firebase Scheduler도 가능하나 이 또한 추가 결제가 필요하기 때문에 github action 선택",
        ]}
        cardImage="/automatic.png"
      ></LeftImgItem>

      <RightImgItem
        cardTitle="취약점 기사 페이지 (검색, 찜, 페이지네이션)"
        cardDescription={[
          "Firebase 읽기 요청을 최소화하여 요금 절감을 목적으로 개발",
          "클라이언트 로직 처리와 Firestore 쿼리 사용 사이에서 고민.",
          "Firestore의 뛰어난 쿼리 성능으로 인해 클라이언트에서만 로직을 처리하는 방식이 요청 감소에 큰 효과가 없었다.",
          "결국 Firebase 쿼리와 클라이언트 로직을 적절히 분배하는 방향으로 정리.",
        ]}
        cardImage="/gif/vulnerability.gif"
      ></RightImgItem>
    </ProjectContainer>
  );
}
export default FlawDetector;
