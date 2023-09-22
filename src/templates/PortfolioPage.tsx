import { data } from'../data/PortfolioData'
import Portfolio from "../components/Portfolio"
import pic0 from './portfolio1.jpg'
import pic1 from './portfolio2.jpg'
import pic2 from './portfolio3.jpg'
import pic3 from './portfolio4.jpg'
import pic4 from './portfolio5.jpg'
import pic5 from './portfolio6.jpg'

export default function PortfolioPage() {
    const imgArr = [pic0, pic1, pic2, pic3, pic4 ,pic5]

  return (
    <section className='portfolio' id='Portfolio'>
        <div className="portfolio--title">
            <h1>My <span>Projects</span></h1>
        </div>
        <div className="Portfolio--Card">
            {data.map((data, index) => (
                <Portfolio {...data} imgSrc={{backgroundImage: `url(.${imgArr[index]})`}}/>
            ))}
        </div>
    </section>
  )
}
