"use client";
import Image from "next/image";
import style from "./double_down_button.module.css";
import handleScroll from "@/utils/handleScroll";

function DoubleDownButton() {
  const onClick = () => {
    handleScroll("about_me");
  };
  return (
    <Image
      className={`${style.down_button} ${style.bounce}`}
      src={"/double-arrow.svg"}
      alt="더 알아보기"
      width={32}
      height={32}
      onClick={onClick}
    />
  );
}

export default DoubleDownButton;
