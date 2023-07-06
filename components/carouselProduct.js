import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel2 from '../components/Carousel2'
import SwiperCore from 'swiper';
import 'swiper/swiper.min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation]);

function carouselProduct({ media }) {
    return (
        <div className='my-8 w-8/12'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                // pagination={{ clickable: true }}
                className='hover:cursor-pointer'
                autoplay={true}
            // autoplay={true}
            //    scrollbar={{ draggable: true }}
            //    onSwiper={(swiper) => console.log(swiper)}
            //    onSlideChange={() => console.log('slide change')}
            >
                <div className="swiper-button-prev  "></div>
                {
                    media?.map((items, index) => (
                        <SwiperSlide key={index}>
                            <iframe
                                width="853"
                                height="480"
                                src={`https://www.youtube.com/embed/${items}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                            {/* {console.log("media" ,media)} */}
                        </SwiperSlide>
                    ))
                }

                {/* <SwiperSlide> <iframe width="1000" height="500" src="https://www.youtube.com/embed/Qhvix00IE0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </SwiperSlide> */}
                {/* <SwiperSlide> <p> mohit3 mohit3 singh rjapudf singh rjapudf mohit3 singh rjapudf </p></SwiperSlide> */}
                {/* <SwiperSlide> <p> mohit4 mohit4 singh rjapudf singh rjapudf mohit4 singh rjapudf </p></SwiperSlide> */}
                <div className="swiper-button-next"></div>
            </Swiper>
        </div>
    )
}

export default carouselProduct