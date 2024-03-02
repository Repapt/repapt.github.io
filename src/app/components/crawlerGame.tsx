'use client';
import Image from "next/image";
import React, { useState, useEffect, useMemo, useRef, HTMLAttributes, memo } from 'react';
import styles from './crawlerGame.module.css'
import { Animal, Obstacle, ObstacleTypes } from "./obstacle";
import GetWindowDimensions from "./WindowDimensions";
import dynamic from "next/dynamic";

export type CrawlerProps = HTMLAttributes<HTMLDivElement> & {
  onGameStart: () => void;
};

type ObstacleInfo = {
  key: number,
  scale: number,
  type: Animal,
  initialPos: number
}

export const CrawlerGame = memo<CrawlerProps>((props) => {
  const { onGameStart } = props;
  
  const { width: windowWidth, height: windowHeight } = GetWindowDimensions();

  const [gameStarted, setGameStarted] = useState(false);
  const [yVal, setYVal] = useState(0);
  const [gameTime, setGameTime] = useState(0.0);

  const cooldownRef = useRef(0);
  const jumpDur = 1000;
  const jumpCooldown = 1100;
  const jumpTickSize = 10;
  const jumpDist = 200;

  const obstacleSpeed = useRef(10);
  const obstacleFrequency = useRef(3000);
  const obstacleTickSpeed = useRef(10);

  const numObstacles = useRef(1);
  
  const minObstacleScale = 2;
  
  let initialObstacle = {key: 0, scale: minObstacleScale, type: ObstacleTypes[0], xPos: 200};
  const [obstaclesInfo, setObstaclesInfo] = useState<[ObstacleInfo] | undefined>();
  const newObstacle = useRef<ObstacleInfo | undefined>();

  function getRandomAnimal() {
    const max = ObstacleTypes.length;
    return ObstacleTypes[Math.floor(Math.random() * max)];
  }

  const floorVal = 100;

  useEffect(() => {
    function handleKeyDown(event: { code: any; key: any; }) {
      if ((event.key === " ") && cooldownRef.current <= 0) {
        doJump();
        setGameStarted(true);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const doJump = () => {
    console.log("jump");
    let dur = 0;
    let vel = jumpDist/25;
    let gravity = 2*jumpTickSize*vel/jumpDur;
    cooldownRef.current = jumpCooldown;
    
    let interval = setInterval(() => {
      dur += 1;
      if (dur === jumpDur/jumpTickSize) {
        clearInterval(interval);
        setYVal(0);
      }
      //console.log(vel*dur - gravity*dur*dur*0.5);
      setYVal(vel*dur - gravity*dur*dur*0.5);

    }, jumpTickSize);
  }

  //spawn new obstacles
  useEffect(() => {
    if (gameStarted) {

      onGameStart();

      const interval = setInterval(() => {
        console.log("add new");
        numObstacles.current += 1;
        const obs = {key: numObstacles.current, scale: minObstacleScale, type: getRandomAnimal(), initialPos: 200};
        newObstacle.current = obs;
      }, obstacleFrequency.current);

      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted && newObstacle.current) {
      console.log("adding new");
      if (!obstaclesInfo) {
        setObstaclesInfo([newObstacle.current]);
      } else {
        const oldInfo : [ObstacleInfo] = obstaclesInfo;
        oldInfo.push(newObstacle.current);
        setObstaclesInfo([...oldInfo]);
      }
      newObstacle.current = undefined;
    }
  }, [gameStarted, newObstacle.current, obstaclesInfo]);

  //reduce cooldown
  useEffect(() => {
    const interval = setInterval(() => {
      cooldownRef.current -= 100;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  //update player
  const player = useMemo(() => {
    console.log(windowWidth);
    const transform_style = {
      transform: `translate(${windowWidth ? windowWidth/2 : -100}px, -${floorVal + yVal}px)`
    }
    return (
      <div className={styles.player} style={{...transform_style}}>
        <Image 
          src="/res/spider.svg" 
          alt="spider"
          width={32}
          height={32}/>
      </div>
    )
  }, [yVal, windowWidth]);

  //move obstacles
  //todo: move this to obstacles, obstacle will receive speed as prop
  //obstacle will also check for collision every update, take player pos as prop

  //update obstacles
  const Obstacles = useMemo(() => {
    //console.log(obstaclesInfo.length);
    if (!obstaclesInfo) {
      return [];
    }
    return obstaclesInfo.map((obstacle) => {
      return (
      <Obstacle
        key={obstacle.key}
        scale={obstacle.scale}
        type={obstacle.type}
        initialPos={obstacle.initialPos}
        tickSpeed={obstacleTickSpeed.current}
        speed={obstacleSpeed.current}      
        windowWidth={windowWidth}
      />);
    });
  }, [obstaclesInfo, windowWidth]);


  return (
    <div className={styles.background}>
      {player}
      {Obstacles}
    </div>
  );
});
