"use client";
import { useState, useEffect } from "react";
import styles from "./header.module.css";
import handleScroll from "@/utils/handleScroll";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.background}  ${styles.fade_in}`}
      style={{
        backgroundColor: isScrolled ? "white" : "transparent",

        boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className={`${styles.container} ${styles.fade_in}`}>
        <button
          style={{
            color: isScrolled
              ? "hsla(267, 77%, 51%, 0.7)"
              : "hsla(267, 46%, 80%, 0.7)",
          }}
          className={styles.header_title}
          onClick={() => handleScroll("home")}
        >
          Home
        </button>
        <div className={styles.header_navigation_menus}>
          <button
            style={{
              color: isScrolled
                ? "hsla(267, 77%, 51%, 0.7)"
                : "hsla(267, 46%, 80%, 0.7)",
            }}
            className={styles.header_navigation_button}
            onClick={() => handleScroll("about_me")}
          >
            About Me
          </button>
          <button
            style={{
              color: isScrolled
                ? "hsla(267, 77%, 51%, 0.7)"
                : "hsla(267, 46%, 80%, 0.7)",
            }}
            className={styles.header_navigation_button}
            onClick={() => handleScroll("skills")}
          >
            Skills
          </button>
          <button
            style={{
              color: isScrolled
                ? "hsla(267, 77%, 51%, 0.7)"
                : "hsla(267, 46%, 80%, 0.7)",
            }}
            className={styles.header_navigation_button}
            onClick={() => handleScroll("projects")}
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
