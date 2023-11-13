import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';
import img1 from './images/harsh1.jpg';
import img2 from './images/harsh2.jpg';
import img3 from './images/harsh3.jpg';
import img4 from './images/harshita.png';

function Slider() {
  const images = [img1, img2, img3, img4];
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (index) => {
    if (index === 0) {
      setActiveSlide(images.length - 1);
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  const nextSliderHandler = (index) => {
    if (index === images.length - 1) {
      setActiveSlide(1);
    } else if (index < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  return (
    <div name='hobbies' className='h-auto  text-white'>
     
    <div className='m-6 h-[600px]'>
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='text-6xl border-2 border-black'
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className=' w-200px h-[400px]'>
              <img
                src={item}
                alt='landscape'
                className=' object-cover w-800px h-[400px] p-4 hover:scale-150 ease-in-out duration-300'
              />
              
            </div>
            <button
              className='text-6xl border-2 border-black'
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
    <hr></hr>
    </div>
  );
}

export default Slider;