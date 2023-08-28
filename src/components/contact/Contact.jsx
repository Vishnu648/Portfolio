import React from 'react'
import styles from './contact.module.css'

function Contact() {
    return (
        <div className={styles.contactContainer} id='contact'>
            <h2>Contact</h2>
            <div className={styles.contacts}>
                <ul className={styles.socialMedias}>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/vishnu-v-s-414265249/">
                        <li className={styles.media}>
                            <img className={styles.socialMLogo} src="/socialMedia/linkedin.png" alt="linkedin" />
                            linkedin
                        </li>
                    </a>
                    <a rel="noreferrer" target="_blank" href="mailto:vishnuvsj34@email.com">
                        <li className={styles.media}>
                            <img className={styles.socialMLogo} src="/socialMedia/gmail.png" alt="email" />
                            email
                        </li>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/Vishnu648">
                        <li className={styles.media}>
                            <img className={styles.socialMLogo} src="/socialMedia/github.png" alt="github" />
                            git
                        </li>
                    </a>
                </ul>
            </div>
            <div className={styles.licence}>© 2023</div>
        </div>
    )
}

export default Contact
