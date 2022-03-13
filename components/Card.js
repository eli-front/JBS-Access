import styles from "../styles/Card.module.css";

export default function Card({ name, location, time }) {
  return (
    <>
      <p className={styles.button}>
        <p id={styles.name}>{name}</p>
        <p id={styles.location}>{location}</p>
        <p id={styles.time}>{time}</p>
        <img src=""></img>
      </p>
    </>
  );
} 
