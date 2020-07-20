import React from "react";
import navBarPhoto from "../../navbarPhoto.jpeg";
import "./Navigation.css";
import {
  MDBBox,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

function Navigation() {
  return (
    <MDBBox>
      <MDBCard className="border-0">
        <MDBCardBody>
          <MDBCardTitle>
            <img
              id="image"
              className="w-responsive text-center mx-auto p-3 mt-2 rounded-circle "
              src={navBarPhoto}
              alt=""
            />{" "}
          </MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBBox>
  );
}

export default Navigation;
