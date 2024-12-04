import LeftImgItem from "@/components/projects/left_img_item";
import RightImgItem from "@/components/projects/right_img_item";
import ProjectContainer from "@/components/projects/project_container";

function Danchoo() {
  return (
    <ProjectContainer
      title="포트폴리오"
      subtitle="내 소개를 효율적으로 하기 위한 포트폴리오 웹 사이트 입니다."
    >
      <LeftImgItem
        cardTitle="개발 문화 경험"
        cardDescription={[
          "협업시 원활한 소통과 개발을 위해 뱅크샐러드의 코드리뷰 Pn룰을 적용하여 팀 프로젝트를 진행 해 보았습니다. ",
          "",
          "",
        ]}
        cardImage="/github.svg"
      ></LeftImgItem>
      <RightImgItem
        cardTitle="SEO 설정"
        cardDescription={["1", "", "", ""]}
        cardImage="/github.svg"
      ></RightImgItem>
    </ProjectContainer>
  );
}
export default Danchoo;
