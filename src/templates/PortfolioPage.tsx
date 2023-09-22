import { data } from'../data/PortfolioData'
import Portfolio from "../components/Portfolio"
import pic0 from '../assets/portfolio1.jpg'
import pic1 from '../assets/portfolio2.jpg'
import pic2 from '../assets/portfolio3.jpg'
import pic3 from '../assets/portfolio4.jpg'
import pic4 from '../assets/portfolio5.jpg'
import pic5 from '../assets/portfolio6.jpg'

export default function PortfolioPage() {
    const imgArr = [pic0.toString(), pic1.toString(), pic2.toString(), 
                    pic3.toString(), pic4.toString() ,pic5.toString()]

  return (
    <section className='portfolio' id='Portfolio'>
        <div className="portfolio--title">
            <h1>My <span>Projects</span></h1>
        </div>
        <div className="Portfolio--Card">
            {data.map((data, index) => (
                <Portfolio {...data} imgSrc={{backgroundImage: `url('${imgArr[index]}')`}}/>
            ))}
        </div>
    </section>
  )
}
