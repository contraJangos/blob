import styles from "./post.module.css";

export default function Post({ header, title, description }) {
  return (
    <div>
      <div className={styles.postHeader}>
        <p>{header.date}</p>
        <p>-</p>
        <p>{header.author}</p>
      </div>
      <div className={styles.postTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.postDescription}>{description}</div>
    </div>
  );
}
