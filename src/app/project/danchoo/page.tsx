import LeftImgItem from "@/components/projects/left_img_item";

import ProjectContainer from "@/components/projects/project_container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오 - Danchoo",
  description: "최민혁 포트폴리오 입니다.",
  openGraph: {
    title: "최민혁 포트폴리오 - Danchoo",
    description: "최민혁 포트폴리오 입니다.",
    images: ["/portfolio.png"],
  },
};
function Danchoo() {
  return (
    <ProjectContainer
      title="Danchoo"
      subtitle="경험이 필요한 취준생과 일손이 필요한 기업을 연결해주는 플랫폼. Next.js 학습과 협업 경험을 위한 프로젝트"
    >
      <LeftImgItem
        cardTitle="개발 문화 경험"
        cardDescription={[
          "협업시 원활한 소통과 개발을 위해 뱅크샐러드의 코드리뷰 Pn룰을 적용하여 팀 프로젝트를 진행",
          "eslint airbnb 룰 경험",
          "github organization과 git flow를 활용하여 협업",
        ]}
        cardImage="/danchoo_lint.png"
      ></LeftImgItem>
    </ProjectContainer>
  );
}
export default Danchoo;
