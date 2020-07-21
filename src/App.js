import React from "react";
import "./App.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBox,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <MDBContainer>
      <Navigation />
      <MDBCard id="main" className="border-0">
        <MDBCardBody>
          <MDBCardTitle id="name">Kevin Buckley</MDBCardTitle>
          <MDBCardText className="">
            <h1>Check out my Github</h1>
            <p>for projects I've made in my personal time</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard id="main" className="border-0">
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard id="main" className="border-0">
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
