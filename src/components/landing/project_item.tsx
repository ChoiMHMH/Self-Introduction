import Link from "next/link";
import styles from "./project_item.module.css";
import Image from "next/image";

type ProjectItemProps = {
  title?: string;
  description?: string;
  image?: string;
};

function ProjectItem({ title, description, image }: ProjectItemProps) {
  return (
    <Link href={`/project/${title}`}>
      <div className={styles.project_item_container}>
        <div className={styles.description_container}>
          <div>{title}</div>
          <div>{description}</div>
        </div>
        <Image
          src="/github.svg"
          alt={image || "임시이미지"}
          width={450}
          height={450}
        />
      </div>
    </Link>
  );
}
export default ProjectItem;
