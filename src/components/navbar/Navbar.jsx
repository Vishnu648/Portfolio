import { useState } from "react"
import styles from "./navbar.module.css"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  return (
    <nav className={styles.navbar}>
      <h2>Vishnu Vs</h2>
      {menuOpen ? <img className={styles.icon} src="/icons/menu.png" alt="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
          console.log(menuOpen);
          setMenu(!menu)
        }}
      /> : <img className={styles.icon} src="/icons/menu.png" alt="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
          console.log(menuOpen);
          setMenu(!menu)
        }}
      />}

      {/* {menu ? setTimeout(() => {
        setMenu(!menu)
      }, 5000) : ""} */}

      {menu ? <div className={styles.menu}>
        <ul className={styles.mul}>
          <a href="#qualification"
            onClick={() => {
              setMenu(!menu)
            }}
          >
            <li>Qualification</li>
          </a>
          <a href="#experience"
            onClick={() => {
              setMenu(!menu)
            }}
          >
            <li>Experience</li>
          </a>
          <a href="#projects"
            onClick={() => {
              setMenu(!menu)
            }}
          >
            <li>Projects</li>
          </a>
          <a href="#contact"
            onClick={() => {
              // setMenuOpen(!menuOpen);
              setMenu(!menu)
            }}
          >
            <li>Contact</li>
          </a>
        </ul>
      </div> : null}



      <ul className={styles.ul}>
        <a href="#qualification">
          <li>Qualification</li>
        </a>
        <a href="#experience">
          <li>Experience</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar
