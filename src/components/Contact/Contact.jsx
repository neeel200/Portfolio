
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>CONTACT</h2>
        <p>Feel free to reach out !</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:NeeleshVinchoorkar@gmail.com">NeeleshVinchoorkar@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://linkedin.com/in/neelesh-vinchoorkar-4130ba204">linkedin.com/in/neelesh-vinchoorkar-4130ba204</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/neeel200">github.com/neeel200</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/LeetCode_Logo_1.png")} alt="leetcode icon" />
          <a href="https://leetcode.com/u/neel200/">leetcode/neel200</a>
        </li>
      </ul>
    </footer>
  );
};
