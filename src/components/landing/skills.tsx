import styles from "./skills.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.padding_container}>
      <div className={styles.background}>
        <h2 className={`${styles.title} section_title font_yang`}>SKILLS</h2>
        <div className={styles.skills_grid}>
          <div className={styles.section}>
            <div className={styles.section_title}>Language</div>
            <ul className={styles.section_list}>
              <li
                className={`${styles.section_list_item} ${styles.typescript_color}`}
              >
                TypeScript
              </li>
              <li
                className={`${styles.section_list_item} ${styles.javascript_color}`}
              >
                JavaScript
              </li>
              <li
                className={`${styles.section_list_item} ${styles.java_color}`}
              >
                Java
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <div className={styles.section_title}>Frontend</div>
            <ul className={styles.section_list}>
              <li
                className={`${styles.section_list_item} ${styles.next_color}`}
              >
                Next.js (React)
              </li>
              <li
                className={`${styles.section_list_item} ${styles.tailwind_color}`}
              >
                Tailwind CSS
              </li>
              <li
                className={`${styles.section_list_item} ${styles.zustand_color}`}
              >
                Zustand
              </li>
              <li
                className={`${styles.section_list_item} ${styles.react_hook_form_color}`}
              >
                React-Hook-Form
              </li>
              <li
                className={`${styles.section_list_item} ${styles.react_query_color}`}
              >
                React-Query
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <div className={styles.section_title}>Backend & DevOps</div>
            <ul className={styles.section_list}>
              <li
                className={`${styles.section_list_item} ${styles.firebase_color}`}
              >
                Firebase
              </li>
              <li className={`${styles.section_list_item} ${styles.aws_color}`}>
                AWS
              </li>
              <li
                className={`${styles.section_list_item} ${styles.vercel_color}`}
              >
                Vercel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
