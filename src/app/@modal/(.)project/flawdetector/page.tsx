import FlawDetector from "@/app/project/flawdetector/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오 - 플로디텍터",
  description: "최민혁 포트폴리오 입니다.",
  openGraph: {
    title: "최민혁 포트폴리오 - 플로디텍터",
    description: "최민혁 포트폴리오 입니다.",
    images: ["/portfolio.png"],
  },
};
function Page() {
  return <FlawDetector />;
}
export default Page;
