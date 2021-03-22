import styles from "./identity.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function Identity({ name, description }) {
  return (
    <div>
      <div className={styles.identity}>
        <h1>{name}</h1>
        <Image
          priority
          src={`/images/${name}.jpg`}
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="Profile pic"
          objectFit="cover"
        />
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}
