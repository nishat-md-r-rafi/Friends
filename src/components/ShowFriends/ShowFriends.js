import React from "react";
import "../ShowFriends/ShowFriends.css";

const ShowFriends = (props) => {
  const seeFriend = props.friend;
  console.log(seeFriend);
  let name = "";
  let age = 0;
  for (let friend of seeFriend) {
    name += " " + friend.name;
    age += friend.age;
  }
  return (
    <div>
      <h1>Click to See Friend Details</h1>
      <h3>All the Name you Select:{name}</h3>
      <h3> Their Total Age: {age}</h3>
    </div>
  );
};

export default ShowFriends;
