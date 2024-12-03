import { ReactNode } from "react";
import styles from "./project_container.module.css";

type ProjectContainerProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

function ProjectContainer({
  children,
  title,
  subtitle,
}: ProjectContainerProps) {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font_yang`}>{title}</h1>
      <h2 className={`${styles.subtitle} `}>{subtitle}</h2>
      {children}
    </div>
  );
}
export default ProjectContainer;
