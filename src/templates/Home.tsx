import ResBtn from "../components/ResBtn";

interface HomeProps {
  name: string,
  profession: string;
  imgSrc: string
}

function Home( {name, profession, imgSrc} : HomeProps) {

  return (
    <section className='home' id='Home'>
      <div className="home-content">
        <div className='left-template'>
          <h3>Hello, It's Me</h3>
          <h1>{name}</h1>
          <h3>And I'm a <span>{profession}</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, rem officiis
            totam pariatur blanditiis corporis distinctio veniam ea maxime itaque perferendis sequi voluptatibus,
            quae neque. Veritatis quas hic quia aperiam.</p>
            <div className="social-media">
              <a href="#"><i className='bx bxl-facebook' ></i></a>
              <a href="#"><i className='bx bxl-instagram'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
            <ResBtn children="Download CV"/>
        </div>
          <div className="img-container">
            <img src={imgSrc} alt=""/>
          </div>
      </div>
    </section>
  )
}

export default Home