import {useState} from 'react'
import ResBtn from "../components/ResBtn"

interface AboutProps {
    profession: string,
    imgSrc: string
}

export default function AboutPage({ imgSrc, profession } : AboutProps) {
    const [isClicked, setIsClicked] = useState(true)

    return (
    <section className='about' id='About'>
        <div className='img-container'>
            <img src={`.${imgSrc}`} alt="Person Image" />
        </div>
        <div className="about-content">
            <h2 className='heading'>About <span>Me</span></h2>
            <h3>{profession}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nesciunt aliquam recusandae doloremque sint vel perspiciatis, 
                voluptates officiis voluptate expedita voluptas enim molestias inventore asperiores 
                aperiam? Quis dignissimos tempore est ea?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit itaque minus facilis, 
                dicta ab at. Id, laudantium. Ducimus porro laudantium eligendi libero ab c
                orrupti debitis molestiae mollitia beatae sequi?</p>
            {isClicked ? <ResBtn 
            children="Read More" 
            handleClick={() => setIsClicked(item => !item)}/> : 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nesciunt aliquam recusandae doloremque sint vel perspiciatis, 
                voluptates officiis voluptate expedita voluptas enim molestias inventore asperiores 
                aperiam? Quis dignissimos tempore est ea?</p>}
        </div>
    </section>
  )
}
