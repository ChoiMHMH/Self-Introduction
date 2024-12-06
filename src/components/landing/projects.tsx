import styles from "./project.module.css";
import ProjectItem from "./project_item";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="section_title font_yang">Projects</h2>
      <div className={styles.project_container}>
        <ProjectItem
          title="플로디텍터"
          detailTitle="AI 기반 코드분석 플랫폼"
          url="flawdetector"
          image="/flawdetector.png"
          date="2024.09 (4人 팀 프로젝트)"
          detailDescription={[
            "웅진 & Udemy 일경험 프로젝트",
            "llm(llama3) 사용한 코드분석",
            "크롤링 및 번역기능 github action을 사용한 자동화",
            "SEO 최적화",
          ]}
          skills="TypeScript, Next.js, Zustand, Tailwind CSS, Firebase,  Vercel, Slack, Jira, Notion"
        />
        <ProjectItem
          title="포트폴리오"
          detailTitle="포트폴리오 웹사이트"
          url="portfolio"
          date="2024.11 (1人 개인 프로젝트)"
          image="/portfolio_landing.png"
          detailDescription={[
            "나만의 포트폴리오를 위한 웹 사이트 개발",
            "Intercept, Parrallel Routes로 모달 구현",
          ]}
          skills="TypeScript, Next.js, css-module"
        />
        <ProjectItem
          title="MOGAZOA"
          detailTitle="음악, 식당, 영화, 강의, 여행지, 전자기기, 호텔, 와인, 옷, 앱 등 다양한 분야의 상품을 리뷰하는 플랫폼"
          url="mogazoa"
          image="/mogazoa.png"
          detailDescription={[
            "React-Query를 이용한 api 세팅",
            "모달 컨테이너 생성",
          ]}
          date="2024.07 (5人 팀 프로젝트)"
          skills="TypeScript, Next.js, Tailwind CSS, React-Query, Vercel"
        />
        <ProjectItem
          title="danchoo "
          detailTitle="취업 연결 플랫폼"
          url="danchoo"
          image="/danchoo.png"
          detailDescription={[
            "협업 경험과 Next.js, Tailwind 학습을 위한 프로젝트",
            "코드 리뷰 문화 Pn rule를 반영하여 개발 문화 경험",
          ]}
          date="2024.04 (5人 팀 프로젝트)"
          skills="TypeScript, Next.js, Tailwind CSS, Vercel, Axios"
        />
        <ProjectItem
          title="너글닿기"
          detailTitle="로그인 없이 자유롭게 만드는 롤링페이퍼 웹사이트"
          url="rolling"
          image="/rolling.png"
          detailDescription={[
            "Css-in-js와 react학습을 위한 프로젝트",
            "반응형 UI와 협업 경험",
          ]}
          date="2024.03 (5人 팀 프로젝트)"
          skills="JavaScript, React, Styled Components, Netlify, Axios"
        />
      </div>
    </section>
  );
}
export default Projects;
