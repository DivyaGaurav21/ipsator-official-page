/**
 * Comment component displays a testimonial section with Swiper for user feedback.
 * It imports Swiper components and styles, as well as required modules like Keyboard and Navigation.
 * The peopleFeedback array is mapped to create individual SwiperSlides, each containing a CommentCard component.
 * @returns {JSX.Element} Comment component JSX
 */


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
import { Keyboard, Navigation } from 'swiper/modules';
import CommentCard from '../helper/CommentCard';

export default function Comment() {
    return (
        <>
            {/* Display section title */}
            <h1 className='text-center font-bold text-2xl'>What people say about us</h1>
            {/* Swiper component for testimonial section */}
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
                navigation={true}
                spaceBetween={100}
                modules={[Keyboard, Navigation]}
                className="mySwiper mt-10 h-[70vh] w-[85%] pb-[25px]"
            >
                {/* Map through peopleFeedback array and create Swiper slides */}
                {
                    peopleFeedback.map(comment =>
                        <SwiperSlide key={comment.id}>
                            <CommentCard testimonial={comment} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
