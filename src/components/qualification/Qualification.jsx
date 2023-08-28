import React from 'react'
import styles from './qualification.module.css'

function Qualification() {
  return (
    <div className={styles.qualification} id='qualification'>
      <h2>Qualifications</h2>
      <div className={styles.qualifications}>
        <div className={`${styles.diploma} ${styles.qua}`}>
            <h3 className={styles.institute}>Diploma</h3>
            <p>Computer Engineering at GPTC Attingal</p>
        </div>
        <div className={`${styles.hs} ${styles.qua}`}>
        <h3 className={styles.institute}>Higher Secondary</h3>
            <p>Science Stream at GMHSS Varkala</p>
        </div>
        <div className={`${styles.school} ${styles.qua}`}>
        <h3 className={styles.institute}>High School</h3>
            <p> at GMHSS Varkala</p>
        </div>
      </div>
    </div>
  )
}

export default Qualification
