import ResBtn from "../components/ResBtn";
import cv from '/public/CV_Jhun_Jhun_Tibayan.pdf'

interface HomeProps {
  name: string,
  profession: string;
  imgSrc: string
}

function Home( {name, profession, imgSrc} : HomeProps) {

  const handleDownloadCV = () => {
    const cvUrl = cv;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Jhun_Jhun_Tibayan_CV.pdf';
    link.click();
  }

  return (
    <section className='home' id='Home'>
      <div className="home-content">
        <div className='left-template'>
          <h3>Hello, It's Me</h3>
          <h1>{name}</h1>
          <h3>And I'm a <span>{profession}</span></h3>
          <p>I enjoy turning ideas into functional experiences—whether it's a web application,
             mobile system, creative digital project, or technical solution</p>
            <div className="social-media">
              <a href="https://www.facebook.com/joonwo.oo/"><i className='bx bxl-facebook' ></i></a>
              <a href="https://www.instagram.com/joon.woo.o"><i className='bx bxl-instagram'></i></a>
              <a href="mailto:jhuntibayan03@gmail.com"><i className='bx bxl-gmail'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
            <ResBtn children="Download CV" handleClick={handleDownloadCV} />
        </div>
          <div className="img-container">
            <img src={imgSrc} alt="Profile Img"/>
          </div>
      </div>
    </section>
  )
}

export default Home