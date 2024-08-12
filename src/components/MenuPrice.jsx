import React from "react";

export const MenuPrice = (props) => {
  return (
    <div className="menuPrice">
      <div className="price font">{props.price}</div>
      <button className="select font">select</button>
    </div>
  );
};
