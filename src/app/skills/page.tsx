import "./../globals.css";
import styles from './skills.module.css'

export default function Home() {
  return (
    <div className="content">
      <div className={styles.page}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.categories}>

        
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Engines/Frameworks</h2>
            <p className={styles.item}>Unity</p>
            <p className={styles.item}>Unreal Engine 4</p>
            <p className={styles.item}>ReactJS</p>
            <p className={styles.item}>MySQL</p>
          </div>
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Languages</h2>
            <p className={styles.item}>C++</p>
            <p className={styles.item}>C#</p>
            <p className={styles.item}>Python</p>
            <p className={styles.item}>Lua</p>
            <p className={styles.item}>Java</p>
            <p className={styles.item}>Rust</p>
          </div>
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Tools</h2>
            <p className={styles.item}>Git</p>
            <p className={styles.item}>Perforce</p>
            <p className={styles.item}>ReactJS</p>
            <p className={styles.item}>MySQL</p>
          </div>
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Other</h2>
            <p className={styles.item}>Celeste</p>
            <p className={styles.item}>Spider-Man knowledge</p>
            <p className={styles.item}>Valorant</p>
            <p className={styles.item}>Climbing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
