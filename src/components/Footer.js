import React, { Component } from "react";
import $ from "jquery";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // smooth scroll functions
    $(document).ready(function() {
      $("a").on("click", function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top
            },
            1000,
            function() {
              window.location.hash = hash;
            }
          );
        }
      });
      $("#myBtn").on("click", function(event) {
        $("html, body").animate(
          {
            scrollTop: $(".arrow-top").offset().top
          },
          1000,
          function() {}
        );
      });
    });
    window.onscroll = function() {
      scrollFunction();
    };
    function scrollFunction() {
      if (document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }
  }

  render() {
    return (
      /* Footer */
      <div id="Footer-part">
        <section id="footer" class="text-center">
          <h1 class="focus-in-contract-bck">
            <span class="font-weight-bold">Johni </span>Kanoungi
          </h1>
          <p>
            ©2018 made with <span class="text-danger">&#10084;</span>
          </p>
        </section>

        <button id="myBtn" title="Go to top">
          <span />
          <span />
        </button>
      </div>
    );
  }
}

export default Footer;
