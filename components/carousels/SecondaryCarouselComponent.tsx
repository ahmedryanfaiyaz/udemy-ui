"use client";

import React, { ReactNode } from "react";
import CourseCardComponent from "../cards/CourseCardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface SecondaryCarouselComponentProps {
  slides: ReactNode[];
}

const SecondaryCarouselComponent = () => {
  const slides: ReactNode[] = [
    <CourseCardComponent />,
    <CourseCardComponent />,
    <CourseCardComponent />,
    <CourseCardComponent />,
    <CourseCardComponent />,
    <CourseCardComponent />,
    <CourseCardComponent />,
  ];

  const responsive = {
    // the naming can be any, depends on you.
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    latop: {
      breakpoint: { max: 1920, min: 1368 },
      items: 5,
    },
    smallLatop: {
      breakpoint: { max: 1368, min: 1100 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1100, min: 850 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 790, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-[1340px] h-[400px] mx-auto secondary-carousel">
      <Carousel arrows responsive={responsive}>
        {slides.map((slide, index) => (
          <div key={index}>{slide}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default SecondaryCarouselComponent;
