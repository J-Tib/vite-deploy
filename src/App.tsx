import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './App.css'
import HeaderPage from './templates/HeaderPage'
import Home from './templates/Home'
import MyPic from './assets/Majimbo.png'
import AboutPage from './templates/AboutPage'
import ServicesPage from './templates/ServicesPage'
import PortfolioPage from './templates/PortfolioPage'
import ContactPage from './templates/ContactPage'


function App() {
  const items = ['Home','About','Services', 'Portfolio', 'Contact']

  const person = {
    name: 'Karl Guerrero',
    profession: 'PhotoGrapher',
    imgSrc: MyPic.toString()
  }
  
  useEffect(() => {
    function scroll () {
        ScrollReveal({
        reset: true,
        distance: '50px',
        duration: 2000,
        delay: 300
      })
      ScrollReveal().reveal('.home', { origin: 'top' })
      ScrollReveal().reveal(`.home.img-container, .about, .contact,
      .services, .portfolio`, { origin: 'bottom' })
    }

    return scroll;
  }, [])

  console.log(person.imgSrc);

  return (
    <>
      <HeaderPage items={items}/>
      <Home {...person}/>
      <AboutPage {...person}/>
      <ServicesPage />
      <PortfolioPage />
      <ContactPage />
    </>
  )
}

export default App
