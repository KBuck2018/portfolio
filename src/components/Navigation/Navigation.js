import React from "react";
import navBarPhoto from "../../navbarPhoto.jpeg";
import "./Navigation.css";
import { MDBBtn } from "mdbreact";

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

      <MDBBtn href="#">About</MDBBtn>
      <MDBBtn href="#">About</MDBBtn>
      <MDBBtn href="#">About</MDBBtn>
      <MDBBtn href="#">About</MDBBtn>
    </div>
  );
}
export default Navigation;
