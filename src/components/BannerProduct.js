import React, { useEffect, useState } from 'react';
import image1 from '../assets/banner/img_coyanaBanner1.webp';
import image2 from '../assets/banner/img_coyanaBanner2.webp';
import image3 from '../assets/banner/img_coyanaBanner3.png';

import image1Mobile from '../assets/banner/img_coyanaBanner1_mobile.png';
import image2Mobile from '../assets/banner/img_coyanaBanner2.webp';
import image3Mobile from '../assets/banner/img_coyanaBanner3.png';

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopImages = [image1, image2, image3];
    const mobileImages = [image1Mobile, image2Mobile, image3Mobile];

    const nextImage = () => {
        setCurrentImage((prev) => (prev < desktopImages.length - 1 ? prev + 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 7000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* Desktop & Tablet Version */}
                <div className="hidden md:flex w-full h-full">
                    {desktopImages.map((imageURL, index) => (
                        <img
                            key={index}
                            src={imageURL}
                            alt={`Banner ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                                currentImage === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}
                </div>

                {/* Mobile Version */}
                <div className="flex md:hidden w-full h-full">
                    {mobileImages.map((imageURL, index) => (
                        <img
                            key={index}
                            src={imageURL}
                            alt={`Banner Mobile ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                                currentImage === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerProduct;
