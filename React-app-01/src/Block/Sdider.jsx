import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
    //EffectFade,
    FreeMode,
    //Navigation,
    Pagination,
    //Autoplay,
} from "swiper/modules";

const Sdider = (productsInfo) => {
    
        console.log(productsInfo);
    
    return (
        <div className="select-none">
            {/* <Swiper
                    spaceBetween={10}
                    effect={"fade"}
                    navigation={true}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper select-none"
                >
                    {productsInfo.map(item =>(
                        <SwiperSlide key={item.id}><img src={item.image} alt=""/>
                    </SwiperSlide>))}

                </Swiper> */}

            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                
            >
                {productsInfo.productsInfo.map((el) => (
                    <SwiperSlide key={el.id}>
                        <img
                            src={el.image}
                            alt=""
                            className="w-[200px] h-[200px] object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Sdider;
