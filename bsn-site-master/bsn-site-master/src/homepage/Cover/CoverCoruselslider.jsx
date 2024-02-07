import React from 'react';
import './coverCoruselslider.scss';
import { useState, useEffect } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { coverData } from './cover-data';
import Navbar from '../../constants/Navbar/Navbar';

const CoverCoruselslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = coverData.length;
  // slidelength = 1 2 3
  // currentSlide = 0 1 2

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="corusel">
      <BiLeftArrow className="arrow prev" onClick={prevSlide} />
      <BiRightArrow className="arrow next" onClick={nextSlide} />

      {coverData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide current' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <>
                {/* <Navbar/> */}
                <img src={slide.Image} alt="slide" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>

                  <hr />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CoverCoruselslider;
