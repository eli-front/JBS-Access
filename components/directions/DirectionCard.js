import styles from "../../styles/DirectionCard.module.css";
import Image from "next/image";
import { useState } from "react";

export default function DirectionCard({
  text,
  direction,
  directionImage,
  visual,
}) {
  const [opened, setOpened] = useState(false);

  function toggle() {
    setOpened(!opened);
  }
  return (
    <div className={styles.direction_card}>
      <section>
        <div className={styles.main_card_section}>
          <div className={styles.direction_arrow}>
            <Image
              src={directionImage}
              width={50}
              height={50}
              alt="direction image"
              layout="fixed"
            ></Image>
          </div>

          <div className={styles.text_section}>
            <div className={styles.bolded_header}>{direction}</div>
            <div>{text}</div>
          </div>
        </div>
        <div
          onClick={toggle}
          className={`${styles.chevron_container} ${
            opened ? styles.opened : ""
          }`}
        >
          <span>visual</span>
          <i className={styles.chevron}></i>
        </div>
      </section>
      <div className={opened ? styles.image_section : styles.closed}>
        <Image src={visual} alt="visual"></Image>
      </div>
    </div>
  );
}
