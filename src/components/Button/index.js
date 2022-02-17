import "./Button.css";
import React from "react";

function Button(props) {
  const { data, handleClick, isShow } = props;

  return (
    <button
      disabled={isShow}
      onClick={handleClick}
      id={data.name}
      className={`btn ${data.className || "btn-primary"} button`}
    >
      {data.name}
    </button>
  );
}

export default Button;
