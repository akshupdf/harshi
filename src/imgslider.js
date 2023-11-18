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
    <div className='w-auto h-auto bg-white p-4'>
    <div className='lg:flex w-[100%] mt-10 lg:h-[22vh] text-red-300 bg-white'>
            <div className='lg:w-[15%] ml-20 '>
            <h1 className='text-4xl m-2 bold'>About Me</h1>
            </div>
            <div className='lg:w-[60%] text-xl '>
            <p>
            Hey there! I'm Harshita Shukla, diving headfirst into the gaming world on YouTube.
             You can catch me live streaming all our gaming adventures, and guess what? I'm proudly rocking
              the title of Content Creator at Godlike Esports right now.

My moment in the spotlight? Well, that happened during the first season of the gaming extravaganza, Playground. 
I was part of the awesome team alongside Carryminathi and Dare Dragon. Fun times and epic gaming – that's what I'm all about!
              </p>
            </div>
            
           
        </div>
    <div className="image-slider relative w-full overflow-hidden hidden md:inline-block  ">
      <animated.div style={props} className="flex transition-transform duration-500 ease-in-out">
        {images.map((img, i) => (
          <div
            key={i}
            className={`w-full h-screen bg-cover bg-center rounded-lg ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </animated.div>
      
      <button onClick={prevSlide} className="absolute top-1/2 transform -translate-y-1/2 left-4  text-2xl focus:outline-none">
       <BiLeftArrow />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-4  text-2xl focus:outline-none">
       <BiRightArrow />
      </button>
    </div>
    <div className='w-[50vh] h-[52vh] overflow-y-auto lg:hidden'>
            <img src={img2} alt="" />
            <img src={img1} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
    </div>
    </div>
  );
};

export default ImageSlider;
