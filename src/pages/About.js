import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-particles-js";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // skill bar functions
    (function() {
      var Progress = function(element) {
        this.context = element.getContext("2d");
        this.refElement = element.parentNode;
        this.loaded = 0;
        this.start = 4.72;
        this.width = this.context.canvas.width;
        this.height = this.context.canvas.height;
        this.total = parseInt(this.refElement.dataset.percent, 10);
        this.timer = null;
        this.diff = 0;
        this.init();
      };

      Progress.prototype = {
        init: function() {
          var self = this;
          self.timer = setInterval(function() {
            self.run();
          }, 25);
        },
        run: function() {
          var self = this;
          self.diff = ((self.loaded / 100) * Math.PI * 2 * 10).toFixed(2);
          self.context.clearRect(0, 0, self.width, self.height);
          self.context.lineWidth = 8;
          self.context.fillStyle = "#fff";
          self.context.strokeStyle = "#0fffb7";
          self.context.textAlign = "center";
          self.context.font = "1.5rem cursive";
          self.context.fillText(
            self.loaded + "%",
            self.width * 0.5,
            self.height * 0.5 + 2,
            self.width
          );
          self.context.beginPath();
          self.context.arc(
            90,
            90,
            70,
            self.start,
            self.diff / 10 + self.start,
            false
          );
          self.context.stroke();
          if (self.loaded >= self.total) {
            clearInterval(self.timer);
          }
          self.loaded++;
        }
      };

      var CircularSkillBar = function(elements) {
        this.bars = document.querySelectorAll(elements);
        if (this.bars.length > 0) {
          this.init();
        }
      };

      CircularSkillBar.prototype = {
        init: function() {
          this.tick = 25;
          this.progress();
        },

        progress: function() {
          var self = this;
          var index = 0;
          var firstCanvas = self.bars[0].querySelector("canvas");
          var firstProg = new Progress(firstCanvas);

          var timer = setInterval(function() {
            if (index > self.bars.length - 1) {
              clearInterval(timer);
            } else {
              var canvas = self.bars[index].querySelector("canvas");
              var prog = new Progress(canvas);
              index++;
            }
            console.log(">>>>>> ", self.bars.length - 1, index);
          }, self.tick); //change self.tick * number to change it to the ordering
        }
      };
      document.addEventListener("DOMContentLoaded", function() {
        var circularBars = new CircularSkillBar("#bars .bar");
      });
    })();

    // AOS
    AOS.init();
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <div>
        <Nav />

        <Particles className="particles" params={particlesOptions} />

        <div className="arrow-top" id="About-page">
          <h1
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Professional background
          </h1>

          <div id="first-part">
            <section
              className="box a"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <h4>2013-2015</h4>
              <div class="vl" />
              <p>
                <span>_Inhaber des Geschäfts „Skyline“, Aleppo, Syrien</span>
                <br />
                ◦ Software\Hardware IT-Servicetechniker
                <br />
                ◦ Verkauf und Beratung
                <br />
                ◦ Buchführung und Kassenabschluss
                <br />
                ◦ Einkauf und Bestellwesen
                <br />◦ Web-Entwicklung
              </p>
            </section>

            <section
              className="box b"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <h4>2017</h4>
              <div className="vl" />
              <p>
                <span>_Praktikum, SCOR Computer & Support, Köln</span>
                <br />
                ◦ IT-Servicetechniker (Windows & Linux)
                <br />
                ◦ Installation und Einrichtung (Hardware/Software)
                <br />
                ◦ Verkabelung und Konfiguration von Hardware
                <br />
                ◦ Software- und Grafikkarteninstallation
                <br />
                ◦ Behebung von Netzwerkproblemen
                <br />◦ Verkauf und Beratung
              </p>
            </section>

            <section
              className="box c"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <h4>2018-2019</h4>
              <div className="vl" />
              <p>
                <span>
                  _Qualifizierungskurs, Webentwicklung, <br /> DCI Digital
                  Career Institute gGmbH, Düsseldorf
                </span>
                <br />
                ◦ FRONTEND:
                <br />
                + HTML5 - CSS/ SCSS/ SASS - Bootstrap
                <br />
                + JavaScript - React
                <br />
                ◦ BACKEND:
                <br />
                + Node.js - Express.js
                <br />+ MongoDB
              </p>
            </section>
          </div>

          <hr align="center" width="50%" />

          <section class="knowledge">
            <h2
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              My knowledge
            </h2>
            <div id="bars">
              <div class="bar" data-percent="65">
                <h3>Git/Version Control</h3>
                <canvas class="bar-circle" width="180" height="180" />
              </div>

              <div class="bar" data-percent="60">
                <h3>Responsive Design</h3>
                <canvas class="bar-circle" width="180" height="180" />
              </div>

              <div class="bar" data-percent="65">
                <h3>Testing/Debugging</h3>
                <canvas class="bar-circle" width="180" height="180" />
              </div>

              <div class="bar" data-percent="75">
                <h3>Linux/Windows</h3>
                <canvas class="bar-circle" width="180" height="180" />
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default About;
