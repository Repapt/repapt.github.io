import "./../globals.css";
import styles from './about.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="content">
      <div className={styles.page}>
        <div className={styles.writing}>
          <h1 className={styles.title}>About me</h1>
          <h3 className={styles.body}> {"I'm passionate about video games and have been making games as a hobby since I was 15. I picked up Unity during my first year in university, and am now in the process of developing a top-down shooter in Unity called "}
          <Link className={styles.link} href="/games">Fallen Templar.</Link></h3>
          <h3 className={styles.body}> Currently based in <strong>Waterloo ON</strong>, I'm in the final year of my computer engineering program at the University of Waterloo.</h3>
          <h3 className={styles.body}> During my program, I completed three game programming internships. My most recent placement was at{" "}
          <a className={styles.link} href="https://www.digitalextremes.com/" target="_blank" rel="noopener noreferrer">Digital Extremes</a>
          , where I was an AI programmer working 
          on AAA live service game Warframe.</h3>
          <h3 className={styles.body}> If I'm not working on a game, I'm usually playing one. My current favourites are 
          Celeste, Hades, Teamfight Tactics, and Doom: Eternal. </h3>
          <h3 className={styles.body}> Outside of games, I enjoy swimming, playing guitar, and falling off the wall at my local climbing gym.</h3>
          <h3 className={styles.body}> Please <strong>feel free to reach out</strong> {"if you've got an opening and think I'd be a good fit (or if you just want to chat)! "}
          <a className={styles.link} href="mailto:samuelskliu@gmail.com" target="_blank" rel="noopener noreferrer">samuelskliu@gmail.com</a></h3>
        </div>
        <div className={styles.image}>
          <Image 
          src="/res/about_photo.png" 
          alt="spider"
          fill={true}/>
        </div>
      </div>
    </div>
  );
}
