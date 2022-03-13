import styles from "../styles/Card.module.css";

export default function Card({ name, location, time }) {
  return (
    <>
      <h1 className={styles.name}>{name}</h1>
      {location}
      {time}
    </>
  );
}
