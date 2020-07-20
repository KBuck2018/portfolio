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
import nightSky from "./Night Sky 3.jpg";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <MDBContainer>
      <MDBRow className="text-center">
        <MDBCol className="">
          <Navigation />
        </MDBCol>
        <MDBCol className="">
          <MDBBox>
            <MDBCard className="border-0">
              <MDBCardBody>
                <MDBCardTitle id="name">Kevin Buckley</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBBox>
          <MDBBox>
            <MDBCard className="border-0">
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  <img
                    src={nightSky}
                    alt="word"
                    className="w-responsive text-center mx-auto p-3 mt-2"
                  />
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBBox>
          <MDBBox>
            <MDBCard className="border-0">
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBBox>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
