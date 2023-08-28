import {useState,useEffect} from 'react'
import styles from './intro.module.css'

function Intro() {

  const experience = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'EXPRESS']
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCharacterIndex < experience[currentExperienceIndex].length) {
        setDisplayedText(prevText => prevText + experience[currentExperienceIndex][currentCharacterIndex]);
        setCurrentCharacterIndex(prevIndex => prevIndex + 1);
      } else {
        setCurrentCharacterIndex(0);
        setCurrentExperienceIndex(prevIndex => (prevIndex + 1) % experience.length);
        setDisplayedText("");
      }
    }, 180); // Delay between typing each character

    return () => clearInterval(interval);
  }, [currentCharacterIndex, currentExperienceIndex]);


  return (
    <div className={styles.intro}>
      <div className={styles.dpContainer}>
        <img className={styles.profilePic} src="/ProfilePicture.png" alt="DP" />
      </div>
      <div className={styles.textContainer}>
        <div>
          <h1>Hi,</h1>
          <h1>Iam Vishnu</h1>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.iam}>Iam a Full Stack Developer with experience in </p>
          <p className={styles.skills}>{displayedText}</p>
        </div>
      </div>
    </div>
  )
}

export default Intro
