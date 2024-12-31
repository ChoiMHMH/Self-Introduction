"use client";
import { useState, useEffect } from "react";
import styles from "./header.module.css";
import handleScroll from "@/utils/handleScroll";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div
      className={`${styles.background} ${
        isScrolled ? styles.scrolledBackground : styles.transparentBackground
      }`}
    >
      <div className={styles.container}>
        <button
          className={`${styles.header_title} ${
            isScrolled ? styles.scrolledColor : styles.header_title
          } `}
          onClick={() => handleScroll("home")}
        >
          HOME
        </button>
        <div className={styles.header_navigation_menus}>
          {["about_me", "skills", "projects"].map((section) => (
            <button
              key={section}
              className={`${styles.header_navigation_button} ${
                isScrolled
                  ? styles.scrolledColor
                  : styles.header_navigation_button
              }`}
              onClick={() => handleScroll(section)}
            >
              {section.replace("_", " ").toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
