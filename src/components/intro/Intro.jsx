import React from 'react';
import "./intro.css";
import imageb from "../../assets/buildspace.jpeg";

const Intro = () => {
  return (
    <div className="intro-container fade-in">
      <div className="row">
        <div className="column pan-from-left">
          <h4>
            What is buildspace?
          </h4>
          <ul>
            <li>
              Buildspace is an innovative online platform designed for builders and creators.
            </li>
            <li>
              It offers unique programs like the "Nights and Weekends" series, which allows participants to work on exciting projects in their spare time.
            </li>
            <li>
              These programs focus on hands-on learning and real-world applications, helping members turn ideas into tangible products.
            </li>
            <li>
              Buildspace fosters a community of motivated individuals, providing the resources and support needed to bring ambitious projects to life.
            </li>
          </ul>
        </div>

        <div className="column pan-from-right">
          <img src={imageb} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
