import Image from 'next/image'
import standingImg from '../../public/assets/skymateImg.jpg'
export default function HomeBanner() {
  return (
    <>
     
      <div className="w-full py-32 bg-blue-100 mt-4 flex flex-col gap-12">
        <div className="w-[80%] mx-auto flex flex-row gap-48">
          <div className="w-3/5 flex flex-col justify-center">
            <h1 className='text-[3rem] font-[700] text-[#1B8036]'>Wesdom Ventures for you</h1>
            <p className='w-full text-center text-[1.5rem]'>
            Welcome to Wesdom Ventures, your trusted partner in finding the perfect piece of land in Nairobi and its environs. We offer a diverse portfolio of properties to fit every dream and budget.
            </p>
          </div>
          <Image src={standingImg} alt="Land image around Nairobi" placeholder='blur' width={500} height={500}/>
        </div>
        <div className="w-[80%] mx-auto flex flex-row-reverse gap-48">
          <div className=" flex flex-col justify-center">
            <h1 className='text-[3rem] font-[700] text-[#1B8036]'>Wesdom Ventures for you</h1>
            <p className='w-full text-center text-[1.5rem]'>
            With over 30 years of experience in the real estate industry, we specialize in connecting buyers with the ideal land for residential, commercial, or agricultural use. Our team of experts is dedicated to providing personalized service and guidance throughout your land purchasing journey.
            </p>
          </div>
          <Image className="w-2/5" src={standingImg} alt="Land image around Nairobi" placeholder='blur' width={500} height={500}/>
        </div>
        
      </div>
    </>
  );
}
