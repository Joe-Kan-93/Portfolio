import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AOS.init();
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <div>
        <Nav />

        <div class="arrow-top" id="Portfolio-page">
          <div className="gal-heading" data-aos="slide-up">
            <h1>My Latest Projects</h1>
            <div className="vl" />
            <p id="gall-par">Here is my latest projects. You'll love them!</p>
          </div>

          <div
            data-aos="slide-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            id="gallery"
          >
            <div class="gallery">
              <a href="#">
                <img src="https://dummyimage.com/500x350/fff/fff" alt="" />
              </a>
              <h4>My Portfolio</h4>
            </div>

            <div class="gallery">
              <a href="#">
                <img src="https://dummyimage.com/500x350/fff/fff" alt="" />
              </a>
              <h4>Store project</h4>
            </div>

            <div class="gallery">
              <a href="#">
                <img src="https://dummyimage.com/500x350/fff/fff" alt="" />
              </a>
              <h4>Tourism website</h4>
            </div>

            <div class="gallery">
              <a href="#">
                <img src="https://dummyimage.com/500x350/fff/fff" alt="" />
              </a>
              <h4>Some project</h4>
            </div>

            <div class="gallery">
              <a href="#">
                <img src="https://dummyimage.com/500x350/fff/fff" alt="" />
              </a>
              <h4>
                My Portfolio
                <br />
                (html/css version)
              </h4>
            </div>

            <div class="gallery">
              <a href="#">
                <img src="https://dummyimage.com/500x350/fff/fff" alt="" />
              </a>
              <h4>React project</h4>
            </div>

            <div class="gallery">
              <a href="#">
                <img src="https://dummyimage.com/500x350/fff/fff" alt="" />
              </a>
              <h4>Some project</h4>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Portfolio;
