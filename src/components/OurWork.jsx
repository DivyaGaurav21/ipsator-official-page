import React, { useEffect, useState } from 'react';
import WorkCard from '../helper/WorkCard';

/**
 * OurWork component displays a section showcasing the company's work.
 * It includes a carousel-like functionality to navigate through the work items.
 * 
 * @param {Array} workDetail - Array of work details to be displayed.
 * @returns {JSX.Element} - Rendered OurWork component.
 */

const OurWork = ({ workDetail }) => {
    // State to manage the current page and items per page for pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    // Effect to handle responsive changes in itemsPerPage
    useEffect(() => {
        const handleResize = () => {
            // Adjust itemsPerPage based on screen width
            if (window.innerWidth <= 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(2);
            }
        };
        // Initial call to handleResize and event listener for resizing
        handleResize();
        window.addEventListener('resize', handleResize);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // Event handlers for navigating to the next and previous pages
    const handleClickNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleClickPrev = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    // Calculate start and end index based on currentPage and itemsPerPage
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // Get the visible work details for the current page
    const visibleWorkDetails = workDetail.slice(startIndex, endIndex);

    return (
        <div className="mt-8 relative" id="ourwork">
            <h1 className="text-center font-bold text-2xl">Our Work</h1>
            {/* Navigation buttons for pagination */}
            <div className="mt-4 text-center absolute top-0 right-0 sm:right-[45px] md:right-16 xl:right-20">
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
            {/* Container for displaying work details */}
            <div className="container mx-auto py-5 gap-1 flex flex-col md:flex-row">
                {visibleWorkDetails.map((work) => 
                    <WorkCard key={work.id} work={work} />
                )}
            </div>
        </div>
    );
};

export default OurWork;
