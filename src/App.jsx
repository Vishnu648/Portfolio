import styles from './App.module.css'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Contact from './components/contact/Contact'
import Qualification from './components/qualification/Qualification'
import Logo from './components/logos/Logo'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className={styles.App}>
     <Navbar/>
<div style={{
   position:'relative',
   top:'60px',
   display:'none'
}}>
      <Intro/>
      <Logo/>
      <Qualification/>
      <Experience/>
      <Projects/>
      <Contact/>

</div>
    </div>
  )
}

export default App
