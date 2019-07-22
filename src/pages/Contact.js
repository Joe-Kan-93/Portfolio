import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />

        <div class="arrow-top" id="Contact-page">
          <h1>&#9135; Contact</h1>
          <section id="contact" class="text-center">
            {/* {{!-- Contact form --}} */}
            <form action="" class="row input-container">
              <div class="form-input col-12">
                <div class="styled-input wide">
                  <input type="text" required />
                  <label>Name</label>
                </div>
              </div>
              <div class="form-input col-6">
                <div class="styled-input">
                  <input type="text" required />
                  <label>Email</label>
                </div>
              </div>
              <div class="form-input col-6">
                <div class="styled-input">
                  <input type="text" required />
                  <label>Phone Number</label>
                </div>
              </div>
              <div class="form-input col-12">
                <div class="styled-input wide">
                  <textarea required />
                  <label>Message</label>
                </div>
              </div>
              <button
                class="btn btn-primary send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
                <div class="button">
                  <i class="fa fa-paper-plane" />
                  <span class="send-text">SEND</span>
                </div>
              </button>
            </form>

            {/* {{!-- Contact data --}} */}
            <div class="direct-contact-container">
              <ul class="contact-list">
                <li class="list-item">
                  <i class="fa fa-map-marker fa-2x">
                    <span class="contact-text place">
                      Alpenerstr. 7, 50825 Köln
                    </span>
                  </i>
                </li>

                <li class="list-item">
                  <i class="fa fa-phone fa-2x">
                    <span class="contact-text phone">
                      <a href="tel:1-212-555-5555" title="Give me a call">
                        0176 / 68732378
                      </a>
                    </span>
                  </i>
                </li>

                <li class="list-item">
                  <i class="fa fa-envelope fa-2x">
                    <span class="contact-text mail">
                      <a href="mailto:#" title="Send me an email">
                        jo.kan992@gmail.com
                      </a>
                    </span>
                  </i>
                </li>
              </ul>

              <hr />

              <ul class="social-media-list">
                <li>
                  <a href="#" target="_blank" class="contact-icon">
                    <i class="fa fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="contact-icon">
                    <i class="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="contact-icon">
                    <i class="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="contact-icon">
                    <i class="fa fa-codepen" aria-hidden="true" />
                  </a>
                </li>
              </ul>

              <hr />

              <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;
