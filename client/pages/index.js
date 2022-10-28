import styles from "../styles/Home.module.css";

import Sidebar from "../layouts/Sidebar";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>conversationlis chat view</div>
    </div>
  );
}
