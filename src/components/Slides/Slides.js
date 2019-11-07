import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Slides = ({ images }) => (
  <Carousel autoPlay>
    {images.map(set => (
      <div>
        <img src={set.src} alt="des" />
        <p className="des">{set.des}</p>
      </div>
    ))}
  </Carousel>
);

export default Slides;
