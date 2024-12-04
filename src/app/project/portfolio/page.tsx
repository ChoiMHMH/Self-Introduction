import LeftImgItem from "@/components/projects/left_img_item";
import RightImgItem from "@/components/projects/right_img_item";
import ProjectContainer from "@/components/projects/project_container";

function Portfolio() {
  return (
    <ProjectContainer title="포트폴리오" subtitle="">
      <LeftImgItem
        cardTitle="기본적인 최적화 및 반응형, 그리고 모달"
        cardDescription={[
          "상호작용하는 부분만 클라이언트로 제작",
          "Parallel & Intercepting Routes 를 사용하여 모달 제작 -> 뒤로가기 및 앞으로 가기 키로 제어 가능하고, URL로 매핑되면 검색 엔진에 해당 상태를 인덱싱하여 SEO 측면에서 이점이 있을 것으로 생각했습니다.",
          "pc 퍼스트로 Tablet , Mobile 반응형으로 제작",
        ]}
        cardImage="/portfolio.png"
      ></LeftImgItem>
      <RightImgItem
        cardTitle="SEO 설정"
        cardDescription={["1", "", "", ""]}
        cardImage="/github.svg"
      ></RightImgItem>
    </ProjectContainer>
  );
}
export default Portfolio;
