
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi,  I am Neelesh !</h1>
        <a className={styles.contactBtn} href="mailto:NeeleshVinchoorkar@gmail.com">
         Reach Out
        </a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/neeleshImage.jpg")} alt="Hero Image of me"></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottompBlur}></div>
    </section>
  );
};

export default Hero;
