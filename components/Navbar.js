import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Link href="/"><a className={styles.navbarname}>JBS Access</a></Link>
        <Link href="/about"><a className={styles.navbaritem}>About</a></Link> 
      </div>
    </>
  );
}
