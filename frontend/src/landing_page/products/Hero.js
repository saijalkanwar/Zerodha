import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container border-bottom p-5 mt-5 mb-5">
      <div className="text-center p-5 mt-5 mb-5">
      <h1>Technology</h1>
      <h3>Sleek,Modern and intuitive trading platform</h3>
      <p className="mt-3">Check out our <Link to="/investments" style={{ textDecoration: "none" }}>
        investment offerings{""}
        <i className="fa fa-long-arrow-right" aria-hidden="true"/>
        </Link>
      </p>
    </div>
    </div>
  );
}
export default Hero;