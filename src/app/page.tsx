import styles from "./page.module.css";
import AboutMe from "@/components/landing/about_me";
import Masthead from "@/components/landing/masthead";
import Skills from "@/components/landing/skills";
import Projects from "@/components/landing/projects";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import TopButton from "@/components/landing/top_button";
import Background from "@/components/landing/background";

export default function Home() {
  return (
    <div className={styles.container}>
      <Background />
      <TopButton />
      <Header />
      <Masthead />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
