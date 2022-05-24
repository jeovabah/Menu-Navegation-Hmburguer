import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";
import { Container } from "./style";

export const SwiperSlider =() => {
  return (
    <Container>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Praia_de_Jau%C3%A1.jpg/1200px-Praia_de_Jau%C3%A1.jpg" alt="praia" /> </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </Container>
  );
}