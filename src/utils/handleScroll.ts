"use client";
const handleScroll = (targetId: string) => {
  const target = document.querySelector(`#${targetId}`);

  if (target instanceof HTMLElement) {
    const targetPosition = target.offsetTop;
    const offset = 50; // 고정 헤더만큼 이동

    window.scrollTo({
      top: targetPosition - offset,
      behavior: "smooth",
    });
  }
};
export default handleScroll;
