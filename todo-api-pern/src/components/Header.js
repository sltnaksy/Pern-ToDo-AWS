import React from "react";
import hiCoders from "../assets/hiCoders.png";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={hiCoders} alt="clarusway" className="cw" />
        <h6 className="text-center mt-5">
          This app has been developed by HiCoders Developers.
        </h6>
        <h1 className="text-center mt-5 header-text">HiCoders Todos</h1>
      </div>
    </div>
  );
};

export default Header;
