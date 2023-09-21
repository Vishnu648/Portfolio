import {useEffect} from 'react'
import styles from './contact.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 100,
        });
      }, []);

    return (
        <div className={styles.contactContainer} id='contact'>
            <h2 data-aos='flip-down'>Contact</h2>
            <div className={styles.contacts}>
                <ul className={styles.socialMedias}>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/vishnu-v-s-414265249/">
                        <li className={styles.media}>
                            <img className={styles.socialMLogo} src="/socialMedia/linkedin.png" alt="linkedin" />
                            linkedin
                        </li>
                    </a>
                    <a rel="noreferrer" target="_blank" href="mailto:vishnuvsj34@gmail.com">
                        <li className={styles.media}>
                            <img className={styles.socialMLogo} src="/socialMedia/email.png" alt="email" />
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
