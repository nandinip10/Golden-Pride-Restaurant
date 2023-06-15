import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              We Stand For Something Good in everything we do: 
            </p>
          </div>
          <p className="p__opensans">
          This means
              carefully sourced premium ingredients from like-minded purveyors
              we admire and love; thoughtful, well-crafted and responsible design for its place; and
            deep community support through donations, events and volunteering.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
