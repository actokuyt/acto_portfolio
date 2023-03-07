import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HTML from "../assets/HTML.jpg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="skill-box">
        <h2>Skills</h2>
        <p>
          Incididunt Lorem velit ad dolor sit velit qui aliqua exercitation
          aliqua veniam labore non.Nulla mollit tempor dolor ad amet id.
        </p>
      </div>
      <Carousel responsive={responsive} infinite={true} className="skill-slider" >
        <div className="item" >
            <img src={HTML} alt="cert" width={200}/>
            <h5>fdfghkghgyuujhoiu</h5>
        </div>
        <div className="item" >
            <img src={HTML} alt="cert" width={200} />
            <h5>fdfghkghgyuujhoiu</h5>
        </div>
        <div className="item" >
            <img src={HTML} alt="cert" width={200} />
            <h5>fdfghkghgyuujhoiu</h5>
        </div>
        <div className="item" >
            <img src={HTML} alt="cert" width={200} />
            <h5>fdfghkghgyuujhoiu</h5>
        </div>
      </Carousel>
    </section>
  );
};