import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <>
      <div className={styles.name}>
        <h1><Link href="/"><a>JBS Access</a></Link></h1>
      </div>
      <div>
        page
      </div>
      <div>
        page
      </div>
      <div>
        about
      </div>
    </>
  );
}
