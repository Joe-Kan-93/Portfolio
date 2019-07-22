import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // words manipulation functions
    const words = ["Web development.", "IT-Service."];
    let i = 0;
    let timer;
    function typingEffect() {
      let word = words[i].split("");
      var loopTyping = function() {
        if (word.length > 0) {
          document.getElementById("heading").innerHTML += word.shift();
        } else {
          deletingEffect();
          return false;
        }
        timer = setTimeout(loopTyping, 400);
      };
      loopTyping();
    }
    function deletingEffect() {
      let word = words[i].split("");
      var loopDeleting = function() {
        if (word.length > 0) {
          word.pop();
          document.getElementById("heading").innerHTML = word.join("");
        } else {
          if (words.length > i + 1) {
            i++;
          } else {
            i = 0;
          }
          typingEffect();
          return false;
        }
        timer = setTimeout(loopDeleting, 200);
      };
      loopDeleting();
    }
    typingEffect();

    // slider functions
    $(document).ready(function() {
      setInterval(function() {
        moveRight();
      }, 6000);

      var slideCount = $("#frontend section div").length;
      var slideWidth = $("#frontend section div").width();
      var slideHeight = $("#frontend section div").height();
      var sliderUlWidth = slideCount * slideWidth;

      $("#frontend").css({ width: slideWidth, height: slideHeight });
      $("#frontend section").css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
      });

      $("#frontend section div:last-child").prependTo("#frontend section");

      function moveLeft() {
        $("#frontend section").animate(
          {
            left: +slideWidth
          },
          200,
          function() {
            $("#frontend section div:last-child").prependTo(
              "#frontend section"
            );
            $("#frontend section").css("left", "");
          }
        );
      }
      function moveRight() {
        $("#frontend section").animate(
          {
            left: -slideWidth
          },
          200,
          function() {
            $("#frontend section div:first-child").appendTo(
              "#frontend section"
            );
            $("#frontend section").css("left", "");
          }
        );
      }

      $("a.control_prev").click(function() {
        moveLeft();
      });
      $("a.control_next").click(function() {
        moveRight();
      });
    });

    // AOS
    AOS.init();
  }

  render() {
    return (
      <div>
        <Nav />

        {/* Home */}
        <div class="arrow-top" id="top">
          <section id="home">
            <div id="head">
              <h2 id="heading" />
              <h2 id="blink">|</h2>
            </div>
          </section>

          <a className="arrow" href="#bottom">
            <div className="arrow-down">
              <span />
              <span />
              <span />
            </div>
          </a>
        </div>

        {/* About (small part) */}
        <div id="bottom">
          <section id="about">
            <div id="ref" className="text-center">
              <div className="first-heading" data-aos="slide-up">
                <h1>Who am i ?</h1>
                <div className="vl" />
              </div>
              <div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  id="ref-inside"
                >
                  <p className="first-par">
                    My name is <span className="font-weight-bold">Johni </span>
                    Kanoungi.
                    <br />
                    I am 26 years old.
                    <br />
                    After graduating from high school in Syria, I set up my own
                    small IT service shop.
                    <br />
                    In 2015 i came to Germany and since then i am studying
                    German.
                    <br />
                    I am looking for a work in IT.
                    <br />
                    That's why I'm currently training as a web developer at DCI.
                  </p>
                  <button>
                    My Resume <i class="fas fa-download" />
                  </button>
                </div>
                <img
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  id="per-photo"
                  src="/img/johni.jpg"
                  alt="pic"
                />
              </div>
            </div>

            <div id="infos" class="text-center">
              <div className="second-heading" data-aos="slide-up">
                <h1>What are my skills and expertise ?</h1>
                <div className="vl" />
              </div>

              <div id="content">
                <div id="frontend">
                  <h1
                    data-aos="slide-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                  >
                    Frontend
                  </h1>

                  <div>
                    <a class="control_next">
                      <i class="fas fa-chevron-right" />
                    </a>
                    <a class="control_prev">
                      <i class="fas fa-chevron-left" />
                    </a>

                    <section>
                      <div className="first-slide">
                        <img src="/img/icons/HTML5_Logo.svg" alt="HTML5" />
                      </div>

                      <div className="second-slide">
                        <img src="/img/icons/CSS3_logo.svg" alt="CSS3" />
                        <img src="/img/icons/Sass_Logo.svg" alt="SASS" />
                        <img
                          src="/img/icons/Bootstrap_logo.svg"
                          alt="Bootstrap"
                        />
                      </div>

                      <div className="third-slide">
                        <img
                          src="/img/icons/JavaScript_logo.svg"
                          alt="JavaScript"
                        />
                        <img src="/img/icons/React_logo.svg" alt="React" />
                      </div>
                    </section>
                  </div>
                </div>

                <div id="backend">
                  <h1
                    data-aos="slide-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                  >
                    Backend
                  </h1>

                  <div>
                    <img src="/img/icons/Node.js_logo.svg" alt="Node.js" />
                    <img src="/img/icons/Expressjs_logo.svg" alt="Expressjs" />
                    <img src="/img/icons/MongoDB_Logo.svg" alt="MongoDB" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
