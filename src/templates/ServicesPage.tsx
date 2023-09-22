import ServiceCard from '../components/ServiceCard'
import { itemService } from '../data/ServiceData'

export default function ServicesPage() {
    
  return (
    <section className="services" id="Services">
        <div className="title-service">
            <h1>Our <span>Services</span></h1>
        </div>
        <div className="Card-Container">
            {itemService.map(item => (
                <ServiceCard 
                icon={item.icon}
                title={item.title} 
                details={item.details}/>
            ))}
        </div>
    </section>
  )
}
