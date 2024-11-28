const handleScroll = (targetId: string) => {
  const target = document.querySelector(`#${targetId}`); // 명시적으로 HTMLElement로 타입 단언

  if (target instanceof HTMLElement) {
    const targetPosition = target.offsetTop; // offsetTop 사용 가능
    const offset = 50; // 50px 위로 이동

    window.scrollTo({
      top: targetPosition - offset, // 목표 위치에서 50px 위로 조정
      behavior: "smooth", // 부드러운 스크롤
    });
  }
};
export default handleScroll;
