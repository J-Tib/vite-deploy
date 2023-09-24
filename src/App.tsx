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
