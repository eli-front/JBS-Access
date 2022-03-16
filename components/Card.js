import styles from "../styles/Card.module.css";
import locationMarker from "../public/icons/locationMarker.png";
import Image from "next/image";
import Link from "next/link";

export default function Card({ name, location, time }) {
  return (
    <Link href={`/directions/${location}`} passHref>
      <p className={styles.button}>
        <div className={styles.imageWrapper}>
          <Image
            src={locationMarker}
            width={60}
            height={60}
            alt="location marker"
          ></Image>
        </div>

        <p id={styles.name}>{name}</p>
        <p id={styles.location}>{location}</p>
        <p id={styles.time}>{time}</p>
      </p>
    </Link>
  );
}
