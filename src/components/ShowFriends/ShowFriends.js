import React from "react";
import SideFriend from "../../SideFriend/SideFriend";
import "../ShowFriends/ShowFriends.css";
import "../ShowFriends/ShowFriends.css";

const ShowFriends = (props) => {
  const seeFriend = props.friend;
  let age = 0;
  for (let friend of seeFriend) {
    age += friend.age;
  }
  return (
    <div className="show-friend">
      <h1>Click to See Friend Details</h1>
      <p>Their total age is: {age}</p>
      <div>
        {props.friend.map((friend) => (
          <SideFriend data={friend} key={friend.name}></SideFriend>
        ))}
      </div>
    </div>
  );
};

export default ShowFriends;
