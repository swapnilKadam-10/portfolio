
import './App.css'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { AboutMe } from './Pages/AboutMe'
import { Contact } from './Pages/Contact'
import { Home } from './Pages/Home'
import { Protfolio } from './Pages/Protfolio'
import { Skills } from './Pages/Skills'
import { ScrollToTopButton } from './features/ScrollToTopButton'

function App() {
  

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Protfolio />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </>
  )
}

export default App
