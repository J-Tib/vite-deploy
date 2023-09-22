import './App.css'
import HeaderPage from './templates/HeaderPage'
import Home from './templates/Home'
import MyPic from '../build/assets/Majimbo-70155f0b.png'
import AboutPage from './templates/AboutPage'
import ServicesPage from './templates/ServicesPage'
import PortfolioPage from './templates/PortfolioPage'

function App() {
  const items = ['Home','About','Services', 'Portfolio', 'Contact']

  const person = {
    name: 'Karl Guerrero',
    profession: 'PhotoGrapher',
    imgSrc: MyPic.toString()
  }

  return (
    <>
      <HeaderPage items={items}/>
      <Home {...person}/>
      <AboutPage {...person}/>
      <ServicesPage />
      <PortfolioPage />
    </>
  )
}

export default App
