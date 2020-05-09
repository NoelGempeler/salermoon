import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 z-50 text-white w-full p-5 ">
      <div className="flex justify-between items-center textcolor">
        <div className="text-3xl ml-24"> Salermoon </div>
        <div className="mr-24" style={{ display: "flex", marginRight: "70px" }}>
          <div className="border-b-2 border-transparent  transition ease-in duration-700 mr-16 cursor-pointer hover:border-renovering-rot">
            About
          </div>
          <div className="mr-16 cursor-pointer">Shop</div>
          <div className="cursor-pointer">Contact</div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
