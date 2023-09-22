interface PortfolioProps {
    skills: string
    detail: string
    link?: string
    imgSrc: {}
}

export default function Portfolio({skills, detail, link, imgSrc} : PortfolioProps) {
    console.log(imgSrc);

  return (
    <div className='template' style={imgSrc}>
            <div className='template-content'>
                <div className='text--content'>
                    <h2>{skills}</h2>
                    <p>{detail}</p>
                        <a href={link}><i className='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
  )
}
