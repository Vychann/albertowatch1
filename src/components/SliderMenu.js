import '../components/SliderMenu.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mainimg1 from '../components/logo/Cartier_logo.jpg';
import mainimg2 from '../components/logo/hublot_logo.png';
import mainimg3 from '../components/logo/omega_logo.png';
import mainimg4 from '../components/logo/vacheron_constantin_logo.png';
import mainimg5 from '../components/logo/zenith_logo.webp';


function SliderMenu() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mainimg1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mainimg2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mainimg3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mainimg4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mainimg5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderMenu;
