import html from "../assets/img/HTML.jpg";
import css from "../assets/img/CSS.jpg";
import javascript from "../assets/img/JavaScript.jpg";
import phonecert from "../assets/img/phone-cert.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I'm fairly sure, you didn't belive me when I said I'm
                multi-talented. Well don't take my word for it, let the stats
                speak.
              </p>
              <Carousel
                showThumbs={false}
                autoFocus={true}
                autoPlay={true}
                infiniteLoop={true}
                interval={10000}
                showArrows={false}
                showStatus={false}
                stopOnHover={true}
              >
                <div className="item">
                  <img src={html} alt="" className="carousel-img" />
                  <h5>HTML Certified</h5>
                </div>
                <div className="item">
                  <img src={css} alt="" className="carousel-img" />
                  <h5>CSS Certified</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="" className="carousel-img" />
                  <h5>JavaScript Certified</h5>
                </div>
                <div className="item">
                  <img src={phonecert} alt="" className="carousel-img" />
                  <h5>Slot Certified Phone Technician</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
