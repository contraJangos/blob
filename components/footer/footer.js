import styles from "./footer.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <Image
          priority
          src={`/logo.svg`}
          height={80}
          width={80}
          alt="logo"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
