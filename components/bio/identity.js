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
          src={`/images/profile/${name}.jpg`}
          className={utilStyles.borderCircle}
          height={200}
          width={200}
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
