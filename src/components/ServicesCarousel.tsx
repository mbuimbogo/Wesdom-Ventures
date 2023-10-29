'use client'
import React, { useState, useEffect, useRef } from 'react';
import CarouselCard from './CarouselCard';
import landSale from "../../public/assets/landSale.jpg";

interface ServiceDataa {
  title: string;
  description: string;
  image: string
}
export const servicesData = [
    {
      title: 'Land Buying Consultation',
      description: 'Our experts provide personalized consultation to understand your requirements and help you choose the right piece of land.',
      image: landSale,
    },
    {
        title: 'Site Visits',
        description: 'Browse through our extensive listings of prime land in Nairobi and its environs, suitable for residential, commercial, or agricultural use.',
        image: landSale,
      },
      {
        title: 'Legal Assistance',
        description: 'We arrange site visits to our listed properties, giving you a firsthand experience of the location and its surroundings.',
        image: landSale
      },
      {
        title: 'After Sale Support',
        description: 'We ensure a hassle-free buying process with our comprehensive legal assistance, including title verification and documentation.',
        image: landSale,
      },
      {
        title: 'Investment Guidance',
        description: 'Our relationship with clients continues beyond the sale with our dedicated after-sales support.',
        image: landSale,
      },
  ];
const CarouselSection = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 300; 

  const scrollNext = () => {
    const newPosition = scrollPosition + cardWidth;

    // to check if we have reached the end of the carousel
    if (newPosition >= servicesData.length * cardWidth) {
      // If at the end, we reset to the start
      setScrollPosition(0);
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
      }
    } else {
      setScrollPosition(newPosition);
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out'; 
      }
    }
  };

  // handle auto-scrolling
  const autoScroll = () => {
    scrollNext();
  };

  useEffect(() => {
    const intervalId = setInterval(autoScroll, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [scrollPosition]);

  return (
    <div className='w-full mt-4 py-12'>
      <div className="flex flex-row gap-4 overflow-hidden">
        <div
          ref={carouselRef}
          style={{ transform: `translateX(-${scrollPosition}px)` }}
          className="flex gap-4"
        >
          {servicesData.map((item) => (
            <CarouselCard
              title={item.title}
              key={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;