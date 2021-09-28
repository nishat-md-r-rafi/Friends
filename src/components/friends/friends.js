import React, { useState, useEffect } from "react";
import Friend from "../Friend/Friend";
import "../friends/friends.css";
import ShowFriends from "../ShowFriends/ShowFriends";

// import "../../../public/";
const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [showFriend, setShowFriend] = useState([]);

  useEffect(() => {
    fetch("./friends.JSON")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  const handleFriend = (newFriend) => {
    const newShowFriend = [...showFriend, newFriend];
    setShowFriend(newShowFriend);
  };

  return (
    <div className="friends-class">
      <div className="friend-container">
        {friends.map((friend) => (
          <Friend
            data={friend}
            handleFriend={handleFriend}
            key={friend.name}
          ></Friend>
        ))}
      </div>
      <div className="show-friend">
        <ShowFriends friend={showFriend}></ShowFriends>
      </div>
    </div>
  );
};

export default Friends;
