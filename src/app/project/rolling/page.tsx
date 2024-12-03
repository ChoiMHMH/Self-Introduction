import LeftImgItem from "@/components/projects/left_img_item";
import RightImgItem from "@/components/projects/right_img_item";
import ProjectContainer from "@/components/projects/project_container";

function RollingPaper() {
  return (
    <ProjectContainer
      title="너글닿기"
      subtitle="로그인 없이 자유롭게 롤링페이퍼를 작성 할 수 있습니다."
    >
      <LeftImgItem
        cardTitle="첫 협업 경험"
        cardDescription={["", "", ""]}
        cardImage="/github.svg"
      ></LeftImgItem>
      <LeftImgItem
        cardTitle="반응형 설정 및 CSS-in-js 경험"
        cardDescription={["", "", ""]}
        cardImage="/github.svg"
      ></LeftImgItem>
    </ProjectContainer>
  );
}
export default RollingPaper;
