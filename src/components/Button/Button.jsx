import React from "react";
import "./Button.css"
const Button = (props) => {
  let { onClickHandler } = props;
//   onClickHandler = () => {
//     console.log("gheohga");
//   };
  if (typeof onClickHandler !== "function") {
    onClickHandler = () => {};
  }
  return (
    <div className="Button" onClick={onClickHandler}>
      {props.children}
    </div>
  );
};

export default Button;
