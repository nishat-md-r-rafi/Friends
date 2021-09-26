import React, { useState, useEffect } from "react";
import Friend from "../Friend/Friend";
import "../friends/friends.css";
import ShowFriends from "../ShowFriends/ShowFriends";

// import "../../../public/";
const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [showFriend, setShowFriend] = useSate([]);

  useEffect(() => {
    fetch("./friends.JSON")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  useEffect(() => {
    if (showFriend.length) {
    }
  }, []);
  return (
    <div className="friends-class">
      <div className="friend-container">
        {friends.map((friend) => (
          <Friend data={friend}></Friend>
        ))}
      </div>
      <div className="show-friend">
        <ShowFriends></ShowFriends>
      </div>
    </div>
  );
};

export default Friends;
