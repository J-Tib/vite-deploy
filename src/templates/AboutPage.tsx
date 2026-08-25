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
            <img src={imgSrc} alt="Person Image" />
        </div>
        <div className="about-content">
            <h2 className='heading'>About <span>Me</span></h2>
            <h3>{profession}</h3>
            <p>My experience spans full-stack web and mobile development, IT support, 
                network administration, database management, and multimedia production. 
                I work primarily with technologies such as React, JavaScript, Node.js, Supabase, 
                Firebase, PHP, MySQL, and RESTful APIs, developing applications that are responsive, 
                scalable, and easy to use. </p>
            {isClicked ? <ResBtn 
            children="Read More" 
            handleClick={() => setIsClicked(item => !item)}/> : 
            <p>Beyond development, I have hands-on experience managing IT infrastructure, troubleshooting 
                hardware and network issues, producing live broadcasts, and creating video and visual content 
                for official events and digital platforms.</p>}
        </div>
    </section>
  )
}
