import React from "react";
import navBarPhoto from "../../navbarPhoto.jpeg";
import "./Navigation.css";
import {} from "mdbreact";

function Navigation() {
  return (
    <div id="sidenav" className="align-right">
      <img
        id="image"
        className="w-responsive text-center mx-auto p-3 mt-2 rounded-circle"
        src={navBarPhoto}
        alt=""
      />
      <p>Kevin Buckley</p>

      <p>
        <a href="#">About</a>
      </p>
      <p>
        <a href="#">About</a>
      </p>
      <p>
        <a href="#">About</a>
      </p>
      <p>
        <a href="#">About</a>
      </p>
    </div>
  );
}
export default Navigation;
