import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import '../css/slider.css'
import { FreeMode, Pagination } from 'swiper/modules'

const Sdider = productsInfo => {
  return (
    <div className="select-none">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {productsInfo.productsInfo.map(el => (
          <SwiperSlide key={el.id}>
            <div className="card w-[300px] h-[400px] dark:bg-gray-700 bg-gray-100 rounded-t-2xl" key={el.id}>
              <img src={el.image} alt="Product" />
              <div>
                <div> {el.name} </div>
                <div>
                  {el.price}
                  {' $'}
                </div>
                <p>{el.description}</p>
              </div>
              <div></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Sdider
