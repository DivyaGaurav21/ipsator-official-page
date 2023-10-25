import React from 'react';

const CommentCard = ({ testimonial }) => {
    return (
        <div className="w-full  min-h-[65vh] shadow-lg rounded-lg items-center relative flex flex-col">
            <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-40 h-40 object-cover 
                rounded-full 
            
                "
            />
            <div className=' min-h-[45vh] md:px-10'>
                <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-2">{testimonial.name}</div>
                    <p className="text-gray-700 text-base">{testimonial.role}</p>
                </div>
                <p className="text-gray-800 text-base px-6 py-2">{testimonial.comment}</p>
            </div>
        </div>
    );
};

export default CommentCard;
