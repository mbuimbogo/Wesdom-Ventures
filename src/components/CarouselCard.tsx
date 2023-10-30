import React from 'react'
import Image from 'next/image';

interface CarouselCardProps {
  title: string;
  image: string;
  description: string;
}
const CarouselCard: React.FC<CarouselCardProps> = ({title, image, description}) => {
  return (
    <div className='w-full'>
        <div className="w-[90%] md:w-[30rem] mx-auto flex flex-col justify-center items-center bg-white text-blue  gap-2 rounded-md px-2 py-3">
            <Image src={image} alt="land sale " className=' rounded-md  py-2 w-full h-full' width={300} height={300} />
            <h5 className='text-center text-[1.5rem] font-[700]'>{title}</h5>
            <p className='text-center mb-4 text-[1.3rem] font-[400]'>{description}</p>
            
        </div>
    </div>
  )
}

export default CarouselCard