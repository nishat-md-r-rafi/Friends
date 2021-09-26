import React from "react";
import "../Friend/friend.css";

const Friend = (props) => {
  const { name, hometown, age, img, passion, ex_salary } = props.data;
  const handleClick = (name, town, age) => {
    console.log(name, age, town);
  };
  return (
    <div className="friend">
      <img src={img} alt="" />
      <h3>Name: {name}</h3>
      <h3>HomeTown: {hometown}</h3>
      <h3>Age: {age}</h3>
      <h3>Passion: {passion}</h3>
      <h3>Salary Expectation: {ex_salary} Taka</h3>
      <button onClick={() => handleClick(name, hometown, age)}>
        See Details
      </button>
    </div>
  );
};

export default Friend;
