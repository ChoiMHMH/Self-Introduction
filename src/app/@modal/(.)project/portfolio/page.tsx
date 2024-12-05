import Portfolio from "@/app/project/portfolio/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오 - 포트폴리오",
  description: "최민혁 포트폴리오 입니다.",
  openGraph: {
    title: "최민혁 포트폴리오 - 포트폴리오",
    description: "최민혁 포트폴리오 입니다.",
    images: ["/portfolio.png"],
  },
};
function Page() {
  return <Portfolio />;
}
export default Page;
