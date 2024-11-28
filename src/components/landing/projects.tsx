import styles from "./project.module.css";
import ProjectItem from "./project_item";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="section_title font_yang">Projects</h2>
      <div className={styles.project_container}>
        <ProjectItem title="플로디텍터" description="코드 취약점 분석" />
        <ProjectItem />
      </div>
    </section>
  );
}
export default Projects;
