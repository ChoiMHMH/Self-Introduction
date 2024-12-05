import RollingPaper from "@/app/project/rolling/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오 - 롤링페이퍼",
  description: "최민혁 포트폴리오 입니다.",
  openGraph: {
    title: "최민혁 포트폴리오 - 롤링페이퍼",
    description: "최민혁 포트폴리오 입니다.",
    images: ["/portfolio.png"],
  },
};
function Page() {
  return <RollingPaper />;
}
export default Page;
