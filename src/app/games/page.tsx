"use client";
import { useEffect, useMemo, useState } from "react";
import "./../globals.css";
import styles from './games.module.css'
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("./GameContainer"),
  {ssr: false}
);

export default function Games() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])
  
  return (
    <div className="content">
      <div className={styles.page}>
      <h1 className={styles.title}>Games</h1>
        {isClient && (
          <div className={styles.row}>
          <div className={styles.itchGame}>
            <iframe src="https://itch.io/embed/2781175?bg_color=FDFEFD&amp;fg_color=222222&amp;link_color=49a0be&amp;border_color=ddd" 
              width="552" height="167"><a href="https://notsamyul.itch.io/fallen-templar">Fallen Templar by notsamyul</a></iframe>
          </div>
          <div className={styles.itchGame}>
            <iframe src="https://itch.io/embed/2777981?bg_color=FDFEFD&amp;fg_color=222222&amp;link_color=49a0be&amp;border_color=ddd" 
              width="552" height="167"><a href="https://notsamyul.itch.io/broken-bike-cyclethon">Broken Bike Cyclethon by notsamyul</a></iframe>
          </div>
        </div>
        )}
      
        {/*<h3 className={styles.title}>Fallen Templar</h3>
        <p className={styles.description}>
          {"A top-down Star Wars inspired shooter made with Unity - a downloadable version can be found on my "}          
          <a className={styles.link} href="https://www.github.com/Repapt/FallenTemplar" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
        <div className={styles.game}>
          <DynamicComponent/>
        </div>
        */}
      </div>
    </div>
  );
}
