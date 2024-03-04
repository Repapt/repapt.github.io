"use client";
import { useMemo, useState } from "react";
import { CrawlerGame } from "./components/CrawlerGame";
import "./globals.css";
import styles from './home.module.css'
import Image from "next/image";
import { basePath } from "./DevEnv";

export default function Home() {

  const [gameStarted, setGameStarted] = useState(false);
  const gameOnline = false;

  const onGameStart = () => {
    setGameStarted(true);
  };

  return (
    <div className="content">
      {!gameStarted && (
        <div className={styles.page}>
          <div className="home-text">
            <h1 className={styles.title}>Hi! I&apos;m Samuel.</h1>
            <h3 className={styles.subtitle}>Current computer engineering student,</h3>
            <h3 className={styles.subtitle}>future professional game developer.</h3>
            <h3 className={styles.body}> Currently seeking new opportunities to level up my career: <a className={styles.link} href="mailto:samuelskliu@gmail.com">samuelskliu@gmail.com</a></h3>
            <a className={styles.button} href={basePath + "/res/Samuel Liu Resume.pdf"} target="_blank" rel="noopener noreferrer">Resume</a>
            <a className={styles.button} href="https://www.github.com/Repapt" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div className={styles.image}>
            <Image 
            src={basePath + "/res/home_photo.png" }
            alt=""
            fill={true}/>
          </div>
        </div>
      )}
      {gameOnline && <CrawlerGame onGameStart={onGameStart}/>}
    </div>
  );
}
