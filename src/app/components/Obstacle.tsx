"use client";
import { HTMLAttributes, memo, useEffect, useMemo, useState } from "react";
import styles from './crawlerGame.module.css'
import Image from "next/image";

export type Animal = {
  src: string;
  width: number;
  height: number;
  yPos: number;
}

export type ObstacleProps = HTMLAttributes<HTMLDivElement> & {
  key: number;
  initialPos: number;
  type: Animal;
  scale: number;
  speed: number;
  tickSpeed: number;
  windowWidth: number | undefined;
}

export const ObstacleTypes = [
  {
    src: "/res/rhino.svg",
    width: 100,
    height: 100,
    yPos: 0
  },
  {
    src: "/res/scorpion.svg",
    width: 50,
    height: 50,
    yPos: 0
  }, 
  {
    src: "/res/vulture2.svg",
    width: 50,
    height: 50,
    yPos: -100
  },
  {
    src: "/res/octopus.svg",
    width: 60,
    height: 60,
    yPos: 0
  },
  {
    src: "/res/lizard.svg",
    width: 50,
    height: 50,
    yPos: 0
  }
]

export const Obstacle = memo<ObstacleProps>((props) => {
  const { type, scale, speed, tickSpeed, initialPos } = props;

  Obstacle.displayName = "Obstacle";

  const [xPos, setXPos] = useState(initialPos);

  useEffect(() => {
    const interval = setInterval(() => {
      setXPos(xPos => xPos - speed);
    }, tickSpeed);

    return () => clearInterval(interval);
  }, [speed]);

  const obstacleImage = useMemo(() => {
    const transform_style = {
      transform: `translate(${xPos}px, ${type.yPos}px)`
    }
    //console.log("num %d at %d", test, xPos);
    return (
      <Image 
          src={type.src}
          alt="OBSTACLE"
          width={type.width*scale}
          height={type.height*scale}
          style={transform_style}
          className={styles.obstacle}/>
    )
  }, [xPos]);

  return (
    <>
    {obstacleImage}
    </>
  );
});
