import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function IconCard({ icon, label, link }) {
  return (
    <Link href={`${link}`}>
      <a>
        <div className={styles.icon_card}>
          <div className={styles.icon_image}>
            <Image src={icon} width={60} height={60} alt={label}></Image>
          </div>
          <span>{label}</span>
        </div>
      </a>
    </Link>
  );
}
