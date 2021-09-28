import React from "react";
import "../SideFriend/SideFriend.css";

const SideFriend = (props) => {
  const { name, age, img } = props.data;
  console.log(name, age, img);
  return (
    <div className="side">
      <img src={img} alt="Cant show" />
      <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
      </div>
    </div>
  );
};

export default SideFriend;
