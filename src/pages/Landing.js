import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section id="landing">
            <div className="div first-div">
              <a href="/home">
                <h1>_Home</h1>
                <p>to know more about me</p>
              </a>
              <img src="/img/01.jpg" alt="pic" />
            </div>

            <div className="div second-div">
              <a href="/about">
                <h1>_About</h1>
                <p>my background</p>
              </a>
              <img src="/img/johni.jpg" alt="pic" />
            </div>

            <div className="div third-div">
              <a href="/portfolio">
                <h1>_Portfolio</h1>
                <p>to see my projects</p>
              </a>
              <img src="/img/003.jpg" alt="pic" />
            </div>

            <div className="div fourth-div">
              <a href="/contact">
                <h1>_Contact</h1>
                <p>you can contact me</p>
              </a>
              <img src="/img/04.jpg" alt="pic" />
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default Landing;
