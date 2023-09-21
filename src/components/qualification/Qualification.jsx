import { useEffect } from 'react'
import styles from './qualification.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Qualification() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <div className={styles.qualification} id='qualification'>
      <h2 data-aos='flip-down'>Qualifications</h2>
      <div className={styles.qualifications} data-aos="fade-right">
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
