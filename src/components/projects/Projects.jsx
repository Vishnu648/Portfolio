import React from 'react'
import styles from "./project.module.css"

function Projects() {
  return (
    <div className={styles.projectsContainer} id='projects'>
      <h2>Projects</h2>
      <div className={styles.projects}>
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
