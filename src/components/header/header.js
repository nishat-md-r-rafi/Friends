import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-item">
        <h1>Make your life easier with good Friends</h1>
        <p>
          As we have to pass a long run so we need good friends to make our task
          easy. But it is hard to find nowadays.
        </p>
        <h3>
          We need tour for this. Tour budget is <span>50</span> Thousand Taka
        </h3>
      </div>
    );
  }
}

export default Header;
