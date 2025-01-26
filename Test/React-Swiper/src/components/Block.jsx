// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

// import required modules
// import { Navigation } from "swiper/modules";
import { FreeMode, Pagination } from "swiper/modules";
import "./cssSwiper/style1.css";
const Block = () => {
    const arr = [];

    for (let i = 0; i < 100; i++) {
        arr.push(i);
    }

    return (
        <div className="Slider">
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {arr.map((el) => (
                    <SwiperSlide key={el}>
                        <img
                            src={`https://picsum.photos/id/${el + 11}/500.jpg`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Block;
