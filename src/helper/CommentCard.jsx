import React from 'react';

const CommentCard = ({ testimonial }) => {
    return (
        <div className="w-full  min-h-[65vh] shadow-lg rounded-lg  m-4 relative pt-32">
            <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-40 h-40 object-cover rounded-t-lg absolute top-0 left-[35%] z-30"
            />
            <div className='bg-slate-400 min-h-[45vh]'>
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
