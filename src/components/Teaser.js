import React from "react";
import "./Teaser.css";

const Teaser = ({ scrollHandler }) => {
  function handleClick(e) {
    e.preventDefault();
    scrollHandler("About");
    console.log("The link was clicked.");
  }

  return (
    <div className="teaser">
      <div className="flex_teaser">
        <div className="mitte">
          <h4 className="teaser_text">Welcome on Salermoon.</h4>
          <h1 className="teaser_text" style={{ fontSize: "60px" }}>
            We sell hyped items from Travis Scott.
          </h1>
          <div className="teaser_text teaser_text_spezial">
            We are locatet in Switzerland and shipp worldwide.
          </div>
          <div onClick={handleClick} className="button text-xl cursor-pointer">
            GO SHOPPING
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaser;
