import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="mainc">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            <h1>Our Story</h1>
          </label>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">The Fathima Atlantics</h5>
            <p className="card-text">
            Since Atlantic launched, it’s held the imagination of the travelling public
            It’s easy to look to things <br />like innovative products and services, glamorous destinations and charismatic crew in bright red uniforms <br /> as the reasons for our success. But these are just part of our story. The personality and language <br /> of our brand plays a major role too, and to get a grasp on why, it’s useful to look at our past.
            bringing together <br /> a seamless and engaging user experience.
            </p>
            <Link to={"/"} className="btn btn-primary">
              Return to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;