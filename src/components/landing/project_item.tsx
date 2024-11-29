import Link from "next/link";
import styles from "./project_item.module.css";
import Image from "next/image";

type ProjectItemProps = {
  title?: string;
  detailTitle?: string;
  detailDescription?: string[];
  image?: string;
  url?: string;
  skills?: string;
  date?: string;
};

function ProjectItem({
  date,
  title,
  detailTitle,
  detailDescription,
  image,
  url,
  skills,
}: ProjectItemProps) {
  return (
    <Link href={`/project/${url}`}>
      <div className={styles.project_item_container}>
        <div className={styles.text_container}>
          <div className={styles.title}>{title}</div>
          <div className={styles.project_details_container}>
            <div className={styles.project_details_title}>{detailTitle}</div>
            <ul className={styles.project_details_description}>
              {detailDescription?.map((data) => (
                <li key={data}>{data}</li>
              ))}
            </ul>
            <div className={styles.project_skills}>{skills}</div>
            <div className={styles.project_date}>{date}</div>
          </div>
        </div>
        <Image
          className={styles.image}
          src={image ? image : "/github.svg"}
          alt={image || "임시이미지"}
          width={400}
          height={400}
        />
      </div>
    </Link>
  );
}
export default ProjectItem;
