import {useState} from 'react'
import ResBtn from "../components/ResBtn"

interface CardProps {
    title: string
    icon: string
    details?: string
    moreDetails?: string
}

export default function ServiceCard({title, details, icon, moreDetails } : CardProps) {
    const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="Card" >
        <div className="Card-template">
            <div className="icon">
                <i className={icon} ></i>
            </div>
            <div className="text-content">
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
            {isClicked ? <p>{moreDetails}</p> : <ResBtn 
            children="Read More" 
            handleClick={() => setIsClicked(item => !item)}/>}
        </div>
    </div>
  )
}
