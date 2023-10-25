import React, { useEffect, useState } from 'react';
import WorkCard from '../helper/WorkCard';

const OurWork = ({ workDetail }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(2);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClickNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleClickPrev = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const visibleWorkDetails = workDetail.slice(startIndex, endIndex);

    return (
        <div className="mt-8 relative">
            <h1 className="text-center font-bold text-2xl">Our Work</h1>
            <div className="mt-4 text-center absolute top-0 right-0 md:right-24">
                <button
                    onClick={handleClickPrev}
                    disabled={currentPage === 0}
                    className="mx-2 py-2 px-4 text-2xl rounded bg-red-500 text-white hover:bg-red-900 disabled:bg-gray-300"
                >
                    <i className="fa-regular fa-circle-left"></i>
                </button>
                <button
                    onClick={handleClickNext}
                    disabled={endIndex >= workDetail.length}
                    className="mx-2 py-2 px-4 text-2xl rounded bg-red-500 text-white hover:bg-red-900 disabled:bg-gray-300"
                >
                    <i className="fa-solid fa-circle-right"></i>
                </button>
            </div>
            <div className="container mx-auto py-5 gap-1 flex flex-col md:flex-row">
                {visibleWorkDetails.map((work) => 
                    <WorkCard key={work.id} work={work} />
                )}
            </div>
        </div>
    );
};

export default OurWork;
