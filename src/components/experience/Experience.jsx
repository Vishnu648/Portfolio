import {useEffect} from 'react'
import styles from "./experience.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 100,
        });
      }, []);

    return (
        <div className={styles.experienceContainer} id='experience'>
            <h2 data-aos='flip-down'>Experience</h2>
            <div className={styles.skillExperience}>
                <div className={styles.experience}>
                    <div className={styles.firstEx} data-aos='fade-right'>
                        <img src="/logos/experience/experience/f12.png" alt="F12" className={styles.companyLogo} />
                        <div className={styles.nameJob} >
                            <p className={styles.comapanyName}>F12 technologies</p>
                            <p className={styles.jobName}>React Developer</p>
                        </div>
                    </div>
                </div>
                <div className={styles.skills} data-aos='fade-left'>
                    <img className={styles.skillLogo} src="/logos/experience/skills/html.png" alt="skill" />
                    <img className={styles.skillLogo} src="/logos/experience/skills/css.png" alt="skill" />
                    <img className={styles.skillLogo} src="/logos/experience/skills/mongodb.png" alt="skill" />
                    <img className={styles.skillLogo} src="/logos/experience/skills/node.png" alt="skill" />
                    <img className={styles.skillLogo} src="/logos/experience/skills/react.png" alt="skill" />
                </div>

            </div>
        </div>
    )
}

export default Experience
