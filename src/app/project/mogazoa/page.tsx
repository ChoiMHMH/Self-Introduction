import LeftImgItem from "@/components/projects/left_img_item";
import RightImgItem from "@/components/projects/right_img_item";
import ProjectContainer from "@/components/projects/project_container";

function Mogazoa() {
  return (
    <ProjectContainer
      title="포트폴리오"
      subtitle="내 소개를 효율적으로 하기 위한 포트폴리오 웹 사이트 입니다."
    >
      <LeftImgItem
        cardTitle="React-Query 를 사용한 api 세팅"
        cardDescription={["학습 목적으로 사용", ""]}
        cardImage="/github.svg"
      ></LeftImgItem>
      <LeftImgItem
        cardTitle="SEO 설정"
        cardDescription={["1", "", "", ""]}
        cardImage="/github.svg"
      ></LeftImgItem>
    </ProjectContainer>
  );
}
export default Mogazoa;
