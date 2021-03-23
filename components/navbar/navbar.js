import styles from "./navbar.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.item}>
          <Link href="/">
            <a>
              <Image
                priority
                src={`/logo.svg`}
                height={55}
                width={55}
                alt="logo"
                objectFit="cover"
              />
              <span>B/ob</span>
            </a>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/bios">
            <a>/bios/</a>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/posts">
            <a>/posts/</a>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/posts">
            <a>/contact/</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
