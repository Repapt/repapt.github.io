import "./../globals.css";
import styles from './about.module.css'
import Link from "next/link";
import Image from "next/image";
import { basePath } from "../DevEnv";

export default function Home() {
  return (
    <div className="content">
      <div className={styles.page}>
        <div className={styles.writing}>
          <h1 className={styles.title}>About me</h1>
          <h3 className={styles.body}> I'm passionate about all things gaming and have been pursuing a career in game development since I was 15.
          Today, I'm a gameplay programmer at {" "}
          <strong>Digital Extremes</strong>
          , where I'm working on bringing the whimsical world of {" "}
          <a className={styles.link} href="https://www.soulframe.com/en" target="_blank" rel="noopener noreferrer">Soulframe</a>
          {" "} to life.</h3>
          <h3 className={styles.body}> I completed my computer engineering program at the <strong>University of Waterloo</strong> in 2024 and am currently based in <strong>Toronto ON</strong>.
          {" I picked up Unity during my first year and am now developing my first solo project, "}
          <Link className={styles.link} href="/games">Fallen Templar.</Link></h3>
          
          <h3 className={styles.body}> If I&apos;m not working on a game, I&apos;m usually playing one. My current favourites are 
          Celeste, Doom Eternal, and Kingdom Come: Deliverance. </h3>
          <h3 className={styles.body}> Outside of games, I enjoy swimming, playing guitar, matcha lattes, and falling off the wall at my local climbing gym.</h3>
          <h3 className={styles.body}> Please <strong>feel free to reach out</strong> {"if you've got an opening and think I'd be a good fit (or if you just want to chat)! "}
          <a className={styles.link} href="mailto:samuelskliu@gmail.com" target="_blank" rel="noopener noreferrer">samuelskliu@gmail.com</a></h3>
        </div>
        <div className={styles.image}>
          <Image 
          src={basePath + "/res/about_photo.png" }
          alt=""
          fill={true}/>
        </div>
      </div>
    </div>
  );
}
