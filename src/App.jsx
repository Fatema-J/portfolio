import { useRef } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'

const App = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const achievementRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToElement = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header
        className="header"
        scrollToElement={scrollToElement}
        homeRef={homeRef}
        aboutRef={aboutRef}
        achievementRef={achievementRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Container fluid>
        <Home ref={homeRef} aboutRef={ aboutRef } scrollToElement={scrollToElement}/>
        <About ref={aboutRef} />
        <Achievements ref={achievementRef}/>
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </Container>
    </>
  )
}

export default App
