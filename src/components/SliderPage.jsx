import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon ,ChevronLeftIcon} from '@heroicons/react/solid';

const slideImages = [
    'https://stimg.cardekho.com/images/uploadimages/1712139274335/Toyota-Urban--Cruiser-Taisor_CD-MasterHead-Desktop_1686x548px.jpg',
    'https://stimg.cardekho.com/images/uploadimages/1712815684596/2024-Jeep-Compass-Night-Eagle_CD-MasterHead-Desktop_1686x548px.jpg',
    'https://stimg.cardekho.com/images/uploadimages/1712815670015/MG-Hector--Blackstorm--Edition_CD-MasterHead-Desktop_1686x548px.jpg'
];

const SlidePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="w-full pt-20 h-auto ">
            <div className="slide-container relative w-full h-auto">
                {slideImages.map((image, index) => (
                    <div
                        key={index}
                        className={`each-slide ${index === currentSlide ? '' : 'hidden'}`}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="h-60vh w-full object-cover" />
                    </div>
                ))}
                <div className="absolute top-0 left-0 w-full h-full flex items-center">
                    <button
                        onClick={goToPreviousSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full"
                    >
                        <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full"
                    >
                        <ChevronRightIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SlidePage;
