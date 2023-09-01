import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner1 from "../../public/banner/Banner1.jpg";
import Banner3 from "../../public/banner/Banner3.jpg";
import Banner4 from "../../public/banner/Banner4.jpg";
import Banner5 from "../../public/banner/Banner5.jpg";
import Image from "next/image";
function Banner() {
  return (
    <div>
      <Carousel
        autoPlay
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        interval={5000}
        className=""
      >
        <Image src={Banner1} alt="" />
        <Image src={Banner3} alt="" />
        <Image src={Banner5} alt="" />
        <Image src={Banner4} alt="" />
      </Carousel>
    </div>
  );
}

export default Banner;
