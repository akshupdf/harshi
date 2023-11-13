import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import img1 from './images/harsh1.jpg';
import img2 from './images/harsh2.jpg';
import img3 from './images/harsh4.jpg';
import img4 from './images/harsh5.jpg';
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi'

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  useEffect(() => {
    let interval;
    if (!hovered) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      
      }, 2000); // Change the interval (in milliseconds) as needed
    }else {
      setHovered(false)
    }

    return () => clearInterval(interval);
  }, [index, hovered]);

  return (
    <div className="image-slider relative w-full overflow-hidden">
      <animated.div style={props} className="flex transition-transform duration-500 ease-in-out">
        {images.map((img, i) => (
          <div
            key={i}
            className={`w-full h-screen bg-cover bg-center ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </animated.div>
      
      <button onClick={prevSlide} className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-2xl focus:outline-none">
       <BiLeftArrow />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-2xl focus:outline-none">
       <BiRightArrow />
      </button>
    </div>
  );
};

export default ImageSlider;
