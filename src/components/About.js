import React from "react";
import bild_1 from "./../images/Travis-Scott-Cactus-Jack-Fortnite-12-Action-Figure-Duo-Set.jpg";
import bild_2 from "./../images/Travis-Scott-The-Scotts-Rage-Emote-T-Shirt-White-2.jpg";

const About = () => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <div>
          <img src={bild_1} alt="" />
        </div>
        <div>
          <img src={bild_2} alt="" />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
