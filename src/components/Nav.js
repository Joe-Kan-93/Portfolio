import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openNav = () => {
    document.getElementById("Navbar").style.width = "20%";
  };
  closeNav = () => {
    document.getElementById("Navbar").style.width = "0";
  };

  render() {
    return (
      <nav>
        <div id="logo">
          <a className="focus-in-contract-bck" href="/">
            <span className="font-weight-bold">Johni </span>Kanoungi
          </a>
        </div>
        <button onClick={this.openNav}>
          <i class="fas fa-bars" />
        </button>

        <div id="Navbar" className="sidenav">
          <button className="closeBtn" onClick={this.closeNav}>
            <span>X</span>
          </button>

          <a className="focus-in-contract-bck" href="/home">
            Home
          </a>
          <a className="focus-in-contract-bck" href="/about">
            About
          </a>
          <a className="focus-in-contract-bck" href="/portfolio">
            Portfolio
          </a>
          <a className="focus-in-contract-bck" href="/contact">
            Contact
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
