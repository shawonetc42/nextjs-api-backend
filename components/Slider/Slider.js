// pages/index.js

import React from "react";
import SwiperComponent from "../../components/Slider/SwiperComponent";

const slides = [
  { imageUrl: "/2.png" },
  { imageUrl: "/2.png" },
  { imageUrl: "/1.png" },
];

const Slider = () => {
  return (
    <div className="">
      <SwiperComponent slides={slides} />
    </div>
  );
};

export default Slider;
