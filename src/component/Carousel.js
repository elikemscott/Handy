import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const Carousel = () => {
  return (
    
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
                className="d-block w-100"
                src="https://images.pexels.com/photos/1037912/pexels-photo-1037912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="First slide" height='600px'
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/327049/pexels-photo-327049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Second slide" height='600px'
              />
            </MDBView>
          </MDBCarouselItem>
          
        </MDBCarouselInner>
      </MDBCarousel>
    
  );
}

export default Carousel;