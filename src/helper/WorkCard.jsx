import React from "react";

const WorkCard = ({ work }) => {
    return (
        <div className="bg-gradient-to-br from-red-400 via-slate-500 to-red-600 shadow-lg rounded-lg overflow-hidden m-4 flex-grow">
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <img
                            src={work.imgsrc}
                            alt={work.title}
                            className="w-20 h-20 object-cover rounded-full bg-white"
                        />
                        <h2 className="ml-3 text-xl font-semibold text-white">{work.title}</h2>
                    </div>
                    <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-4 bg-slate-100 text-blue-700 text-center py-2 px-4 rounded-md font-semibold hover:bg-slate-300 hover:text-slate-900 transition duration-300"
                    >
                        View Project
                    </a>

                </div>
                <div className="mb-4">
                    <p className="text-gray-100">{work.workDetail}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {work.stack.map((stackItem, index) => (
                        <div
                            key={index}
                            className="bg-red-200 rounded-md py-1 text-center text-red-800"
                        >
                            {stackItem}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
