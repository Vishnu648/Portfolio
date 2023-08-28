import React from 'react'
import styles from './logo.module.css'

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src="/logos/skills/css.png" alt="css" className={styles.singleLogo}/>
      <img src="/logos/skills/html.png" alt="html" className={styles.singleLogo}/>
      <img src="/logos/skills/javascript.png" alt="js" className={styles.singleLogo}/>
      <img src="/logos/skills/react.png" alt="react" className={styles.singleLogo}/>
    </div>
  )
}

export default Logo
