"use client";
import "./../globals.css";
import styles from './skills.module.css'
import Image from "next/image";

export default function Skills() {
  const heartWidth = 32;
  
  return (
    <div className="content">
      <div className={styles.page}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.categories}>
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Languages</h2>
            <div className={styles.itemLang}>
              <p className={styles.itemTitle}>C++</p>
            </div>
            <div className={styles.itemLang}>
              <p className={styles.itemTitle}>C#</p>
            </div>
            <div className={styles.itemLang}>
              <p className={styles.itemTitle}>Python</p>
            </div>
            <div className={styles.itemLang}>
              <p className={styles.itemTitle}>Lua</p>
            </div>
            <div className={styles.itemLang}>
              <p className={styles.itemTitle}>Java</p>
            </div>
            <div className={styles.itemLang}>
              <p className={styles.itemTitle}>Rust</p>
            </div>
            <div className={styles.itemLang}>
              <p className={styles.itemTitle}>Kotlin</p>
            </div>
            <div className={styles.itemLang}>
              <p className={styles.itemTitle}>Assembly (RISC-V)</p>
            </div>
          </div>
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Technologies</h2>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Unity</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_half.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Unreal Engine 4</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_half.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Android Studio</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_half.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>ReactJS</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>MySQL</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Git & Perforce</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_half.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
          </div>
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Other</h2>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Adobe Creative Suite</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Playlist making</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Pixel art</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_half.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Valorant</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_half.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_empty.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Spider-Man trivia</p>
              <div className={styles.heartsContainer}>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_full.png" alt="" width={heartWidth} height={heartWidth}/>
                <Image src="/res/heart_half.png" alt="" width={heartWidth} height={heartWidth}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
