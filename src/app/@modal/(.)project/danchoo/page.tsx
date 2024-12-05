import Danchoo from "@/app/project/danchoo/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최민혁 포트폴리오 - Danchoo",
  description: "최민혁 포트폴리오 입니다.",
  openGraph: {
    title: "최민혁 포트폴리오 - Danchoo",
    description: "최민혁 포트폴리오 입니다.",
    images: ["/portfolio.png"],
  },
};
function Page() {
  return <Danchoo />;
}
export default Page;
