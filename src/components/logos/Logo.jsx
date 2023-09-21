import {useEffect} from 'react'
import styles from './logo.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Logo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <div data-aos='fade-up' className={styles.logoContainer}>
      <img src="/logos/skills/css.png" alt="css" className={styles.singleLogo} />
      <img src="/logos/skills/html.png" alt="html" className={styles.singleLogo} />
      <img src="/logos/skills/javascript.png" alt="js" className={styles.singleLogo} />
      <img src="/logos/skills/react.png" alt="react" className={styles.singleLogo} />
    </div>
  )
}

export default Logo
