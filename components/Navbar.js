import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <h1>JBS Access</h1>
      </div>
    </>
  );
}
