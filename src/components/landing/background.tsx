import styles from "./background.module.css";

const Background = () => {
  const techStacks = [
    "Java",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind",
    "Zustand",
    "Firebase",
    "AWS",
    "Vercel",
    "GitHub",
    "Redux",
    "Node.js",
    "Python",
    "Docker",
    "C++",
    "Java",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind",
    "Zustand",
    "Firebase",
    "AWS",
    "Vercel",
    "GitHub",
    "Redux",
    "Node.js",
    "Python",
    "Docker",
    "C++",
  ];
  const techStacks2 = [
    "Docker",
    "Vercel",
    "Java",
    "TypeScript",
    "React",
    "Tailwind",
    "JavaScript",
    "Firebase",
    "Linux",
    "Zustand",
    "Next.js",
    "AWS",
    "Python",
    "GitHub",
    "Node.js",
    "Redux",
    "Vue",
    "C++",
    "Docker",
    "Vercel",
    "Java",
    "TypeScript",
    "React",
    "Tailwind",
    "JavaScript",
    "Firebase",
    "Linux",
    "Zustand",
    "Next.js",
    "AWS",
    "Python",
    "GitHub",
    "Node.js",
    "Redux",
    "Vue",
    "C++",
  ];

  return (
    <div className={styles.background}>
      <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          {techStacks.map((tech, index) => (
            <div key={index} className={styles.icon}>
              {tech}
            </div>
          ))}
        </div>
        <div className={`${styles.marqueeInner} ${styles.marquee_reverse}`}>
          {techStacks.map((tech, index) => (
            <div key={`reverse-${index}`} className={styles.icon}>
              {tech}
            </div>
          ))}
        </div>
        <div className={`${styles.marqueeInner} ${styles.scroll_slow}`}>
          {techStacks2.map((tech, index) => (
            <div key={`clone-${index}`} className={styles.icon}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;
