import "./../globals.css";
import styles from './about.module.css'

export default function Home() {
  return (
    <div className="content">
      <div className={styles.page}>
        <h1 className={styles.title}>About me</h1>
        <h3 className={styles.body}> I'm passionate about video games and have been making games as a hobby since I was 15. I picked up Unity during my first year in university, and am now in the process of developing a top-down shooter in Unity called Fallen Templar. </h3>
        <h3 className={styles.body}> Currently based in <strong>Waterloo ON</strong>, I'm in the final year of my computer engineering program at the University of Waterloo.</h3>
        <h3 className={styles.body}> During my program, I completed three game programming internships. My most recent placement was at Digital Extremes, where I was an AI programmer working 
        on AAA live service game Warframe.</h3>
        <h3 className={styles.body}> If I'm not working on a game, I'm usually playing one. My current favourites are 
        Celeste, Hades, Teamfight Tactics, and Doom: Eternal. </h3>
        <h3 className={styles.body}> Outside of games, I enjoy swimming, playing guitar, and falling off the wall at my local climbing gym.</h3>
        <h3 className={styles.body}> Please feel free to reach out if you've got an opening I'd be a good fit for (or if you just want to chat)! </h3>
      </div>
    </div>
  );
}
