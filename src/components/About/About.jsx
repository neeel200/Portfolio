

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>FullStack Developer</h3>
              <p>
              I am a self-motivated software developer specializing in building full-stack applications that are efficient, scalable, and user-friendly. Passionate about problem-solving, I thrive on creating impactful solutions that drive innovation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};