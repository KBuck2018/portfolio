import React from "react";
import "./App.css";
import {
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBCarouselCaption,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdbreact";
import "./App.css";
import navBarPhoto from "./navbarPhoto.jpeg";

// import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <MDBContainer className="">
      <MDBRow>
        <MDBCol className="ml-4">
          <div id="sidenav" className="">
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
        </MDBCol>
        <MDBCol className="ml-n2">
          <MDBCard id="main" className="border-0 ">
            <MDBCardBody>
              <MDBCarousel
                activeItem={1}
                length={2}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block hw-100 "
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                      />
                      <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h1 id="font" className="h1-responsive">
                        Kevin Buckley
                      </h1>
                      <p id="font">First text</p>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block hw-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                        alt="Second slide"
                      />
                      <MDBMask overlay="black-strong" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h1 id="font" className="h1-responsive">
                        Check out my Github
                      </h1>
                      <h5 id="font">
                        for projects I've made in my personal time
                      </h5>
                      <MDBBtn
                        rounded
                        href="https://github.com/KBuck2018"
                        color="info"
                        id="font"
                      >
                        <MDBIcon icon="link" className="mr-1">
                          Github
                        </MDBIcon>
                      </MDBBtn>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
              {/* <MDBCardTitle id="name">Kevin Buckley</MDBCardTitle>
          <MDBCardText className="">
            <h1>Check out my Github</h1>
            for projects I've made in my personal time
            <MDBBtn rounded color="info">
              <MDBIcon icon="tasks" className="mr-1">
                Github
              </MDBIcon>
            </MDBBtn>
          </MDBCardText> */}
            </MDBCardBody>
          </MDBCard>
          <MDBCard id="main" className="border-0">
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard id="main" className="border-0">
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
