import React from "react";
import bild_1 from "./../images/Travis-Scott-Cactus-Jack-Fortnite-12-Action-Figure-Duo-Set.jpg";
import bild_2 from "./../images/Travis-Scott-The-Scotts-Rage-Emote-T-Shirt-White-2.jpg";
import bild_3 from "./../images/Travis-Scott-The-Scotts-Rage-Emote-T-Shirt-White.jpg";
import bild_4 from "./../images/Travis-Scott-The-Scotts-World-Tie-Dye-T-Shirt-Tie-Dye.jpg";

const About = () => {
  return (
    <div>
      <h2 className="mt-12 flex justify-center border-b border-w pb-12 text-3xl ">
        Our collection
      </h2>
      <div className=" flex justify-around pt-24 ml-32  mr-32 mb-20">
        <div>
          <div>
            <img src={bild_1} className="max-w-xs" alt="" />
          </div>
          <div>
            <h2 className="ml-14 mt-5 font-bold p-6">
              Travis Scott Fortnite Action Figure Duo Set 12”
            </h2>
            <h3 className="ml-14 pl-8">
              {" "}
              Price 420-.
              <br /> Condition: New
            </h3>
          </div>
        </div>
        <div>
          <div>
            <img src={bild_2} className="max-w-xs" alt="" />
          </div>
          <div>
            <h2 className="ml-14 mt-5 font-bold p-6">
              Travis Scott Fortnite Action Figure Duo Set 12”
            </h2>
            <h3 className="ml-14 pl-8">
              {" "}
              Price 130-.
              <br /> Condition: New
            </h3>
          </div>
        </div>
        <div>
          <div>
            <img src={bild_3} className="max-w-xs" alt="" />
          </div>
          <div>
            <h2 className="ml-14 mt-5 font-bold p-6">
              Travis Scott Fortnite Action Figure Duo Set 12”
            </h2>
            <h3 className="ml-14 pl-8">
              {" "}
              Price 150-.
              <br /> Condition: New
            </h3>
          </div>
        </div>
        <div>
          <div>
            <img src={bild_4} className="max-w-xs" alt="" />
          </div>
          <div>
            <h2 className="ml-14 mt-5 font-bold p-6">
              Travis Scott Fortnite Action Figure Duo Set 12”
            </h2>
            <h3 className="ml-14 pl-8">
              {" "}
              Price 125-.
              <br /> Condition: New
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
