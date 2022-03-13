import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Link href="/"><a className={styles.navbarname}>JBS Access</a></Link>
        {/*<Link href="https://www.youtube.com"><a className={styles.navbaritem}>Page</a></Link>
        <Link href="https://www.twitter.com"><a className={styles.navbaritem}>Page</a></Link>*/}
        <Link href="https://www.jburroughs.org"><a className={styles.navbaritem}>About</a></Link> 
      </div>
    </>
  );
}
