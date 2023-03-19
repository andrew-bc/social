import React from "react";
import preloadImage from "./../../img/preload.svg";

const Preload = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={preloadImage} alt="Loading..." style={{ maxWidth: "150px" }} />
    </div>
  );
};
export default Preload;
