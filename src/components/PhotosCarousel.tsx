import React, { FunctionComponent } from "react";
import { Carousel } from "react-responsive-carousel";

import CarouselImage1 from "../assets/images/carousel_img_1.webp";
import CarouselImage2 from "../assets/images/carousel_img_2.webp";
import CarouselImage3 from "../assets/images/carousel_img_3.webp";

interface PhotosCarouselProps {}

const PhotosCarousel: FunctionComponent<PhotosCarouselProps> = () => {
  return (
    <Carousel autoPlay showThumbs={false} interval={2000} infiniteLoop>
      <div>
        <img src={CarouselImage1} alt="" />
      </div>
      <div>
        <img src={CarouselImage2} alt="" />
      </div>
      <div>
        <img src={CarouselImage3} alt="" />
      </div>
    </Carousel>
  );
};

export default PhotosCarousel;
