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
  
  return (
    <div className="content">
      <div className={styles.page}>
        <h3 className={styles.title}>Fallen Templar</h3>
        <p className={styles.description}>
          {"A top-down Star Wars inspired shooter made with Unity - a downloadable version can be found on my "}          
          <a className={styles.link} href="https://www.github.com/Repapt/FallenTemplar" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
        <div className={styles.game}>
          <DynamicComponent/>
        </div>
      </div>
    </div>
  );
}
