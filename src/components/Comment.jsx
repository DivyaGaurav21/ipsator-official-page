import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { peopleFeedback } from '../helper/staticData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/comment.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import CommentCard from '../helper/CommentCard';

export default function Comment() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Navigation, Pagination]}
                className="mySwiper mt-20"
                style={{ height: '70vh', width: '85%', paddingBottom: "25px", }}
            >
                {
                    peopleFeedback.map(comment =>
                        <SwiperSlide key={comment.id}>
                            <CommentCard testimonial={comment} />
                        </SwiperSlide>
                    )
                }
                {/* <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}
