import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils"

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* TIMELINE EXPERIENCE SECTION */}
        <div className={styles.timelineWrapper}>
          {history.map((item, id) => (
            <div key={id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>{item.role}</h3>
                <h4>{item.organisation}</h4>
                <span className={styles.dates}>
                  {item.startDate} - {item.endDate}
                </span>
                <ul>
                  {item.experiences.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* SKILLS SECTION */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
