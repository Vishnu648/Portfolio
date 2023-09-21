import {useEffect} from 'react'
import styles from "./project.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <div className={styles.projectsContainer} id='projects'>
      <h2 data-aos='flip-down'>Projects</h2>
      <div data-aos="fade-down" className={styles.projects}>
        <div className={styles.project}>
          <a href="https://movies-app-by-vishnu.netlify.app/" rel="noreferrer" target="_blank">
            <img className={styles.projectImg} src="/Projects/moviesApp.webp" alt="moviesapp" />
          </a>
        </div>
        {/* <div className={styles.project}>second</div> */}
      </div>
    </div>
  )
}

export default Projects
