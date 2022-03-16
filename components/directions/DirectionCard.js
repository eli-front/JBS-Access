import styles from "../../styles/DirectionCard.module.css";
import Image from "next/image";
import { useState } from "react";

export default function DirectionCard({ text, direction, directionImage }) {
  const [opened, setOpened] = useState(false);

  function toggle() {
    setOpened(!opened);
  }
  return (
    <div className={styles.direction_card}>
      <section>
        <div className={styles.main_card_section}>
          <Image
            src={directionImage}
            width={50}
            height={50}
            alt="direction image"
          ></Image>
          <div className={styles.text_section}>
            <div className={styles.distance_from_next_dir}>{text}</div>
            <div className="direction-card__direction">{direction}</div>
          </div>
        </div>
        <div
          onClick={toggle}
          className={`${styles.chevron_container} ${
            opened ? styles.opened : ""
          }`}
        >
          <i className={styles.chevron}></i>
        </div>
      </section>
      <div className={opened ? styles.image_section : ""}></div>
    </div>
  );
}
