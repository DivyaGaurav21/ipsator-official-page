import React from 'react';

const CommentCard = ({ testimonial }) => {
    return (
        <div className="w-full bg-gradient-to-t from-slate-300 to-red-100 min-h-[65vh] shadow-lg rounded-lg items-center relative flex flex-col p-4 md:p-6 overflow-hidden">
            <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-40 h-40 object-cover rounded-full"
            />
            <div className="min-h-[45vh]">
                <div className="px-6 py-2">
                    <div className="font-semibold text-2xl mb-2 text-red-800">{testimonial.name}</div>
                    <p className="text-green-400 text-lg">{testimonial.role}</p>
                </div>
                <p className="text-gray-800 text-base px-6 font-serif text-justify">"{testimonial.comment}"</p>
            </div>
        </div>
    );
};

export default CommentCard;
