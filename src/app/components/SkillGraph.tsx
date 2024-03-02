"use client";
import { HTMLAttributes, memo, useEffect, useMemo, useState } from "react";
import styles from './crawlerGame.module.css'
import Image from "next/image";

export type skillGraphProps = {
  score: number,
  name: string
}

export const SkillGraph = (props: skillGraphProps) => {
  const { score, name } = props;

  const showHearts = () => {
    let heartsList = [];

    for (let i=0; i<=score; i+=2) {
      if (i === score) {
        heartsList.push(<Image key={i} src="/res/heart_half.png" alt="" width={32} height={32}/>);
      }
      heartsList.push(<Image key={i} src="/res/heart_full.png" alt="" width={32} height={32}/>);
    }

    return heartsList;
  }

  return (
    <div>
      {showHearts()}
    </div>

  );
}