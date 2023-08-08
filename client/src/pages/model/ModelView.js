import React from "react";
import { IoIosClose } from "react-icons/io";
import "./modelview.css";

function ModelView({ show, imgUrl }) {
  return (
    <div className="overlay">
      <div className="model text-center">
        <span className="span" onClick={show}>
          <IoIosClose />
        </span>
        <img src={imgUrl} loading="lazy" alt="no image" />
      </div>
    </div>
  );
}

export default ModelView;
