"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./top_button.module.css";
import upArrow from "/public/up-active.svg";

function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200;
      if (isVisible !== shouldShow) {
        setIsVisible(shouldShow);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button onClick={onClick} className={styles.topButton}>
        <Image
          src={upArrow}
          alt="Up Arrow Icon"
          width={28}
          height={28}
          priority
        />
      </button>
    )
  );
}

export default TopButton;
