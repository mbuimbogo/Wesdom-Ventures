import Image from "next/image";
import React from "react";
// import { boardMembers, allMembers, values } from "@/data/members";
// import BoardMembers from "@/components/BoardMembers";
// import AllMembers from "@/components/AllMembers";
// import CoreValue from "@/components/CoreValue";
// import CustomHead from "@/components/CustomHead";

export default function About() {
  return (
    <div className="mt-32 bg-blue-100">
      <div className="flex flex-col items-center justify-center md:justify-center ">
        <div className=" md:text-4xl text-4xl flex flex-col font-bold text-white items-center">
          <h1 className=" font-bold text-black">ABOUT THE </h1>

          <h1 className="">
            <span className="text-red-600">Wesdom </span> Ventures
          </h1>
        </div>
      </div>
      <section className="w-[90%] mx-auto py-6 lg:py-12">
        <p className="text-2xl">
          At Wesdom Ventures, we believe in the power of land ownership and its
          potential to transform lives. Since our establishment, we have been
          dedicated to making the process of buying land in Nairobi and its
          surrounding areas as simple, transparent, and rewarding as possible.
        </p>
        <p className="text-2xl">
          Our journey began with a clear vision: to become the most trusted
          partner for individuals, families, and businesses seeking to invest in
          land. Today, we are proud to have helped countless clients turn their
          dreams of land ownership into reality. Our team of experienced real
          estate professionals is committed to delivering unparalleled service.
        </p>

        <p className="text-2xl">
          We understand that every client has unique needs and aspirations, and
          we strive to offer personalized guidance and support to match. From
          first-time buyers to seasoned investors, we offer a comprehensive
          range of services to meet diverse land buying needs.
        </p>
        <p className="text-2xl">
          At Wesdom Ventures, our core values are integrity, transparency, and
          customer satisfaction. We work diligently to provide our clients with
          accurate, up-to-date information, ensuring that they make
          well-informed decisions. Our commitment to ethical practices and
          customer service excellence sets us apart in the industry. Whether
          you&apos;re seeking a serene residential plot, a strategic commercial
          location, or fertile agricultural land, Wesdom Ventures is here to
          guide you every step of the way. Let us help you make a wise land
          investment that will benefit you for generations to come.
        </p>
      </section>
      <div className="mt-4 p-2 box-border">
        <Image
          src="/assets/contactland.jpg"
          width={500}
          height={300}
          className="w-full h-[450px] max-w-full object-cover rounded-sm" alt="land sale"       />
      </div>

      <div className="max-w-[80%] mx-auto md:flex justify-center items-center  mt-4">
        <div className="flex flex-col items-center ">
          <h1 className="font-bold text-4xl  mt-8">OUR MISSION</h1>
          <div className="h-1 w-24 md:ml-30 mb-[10px] bg-red-600"></div>
          <p className="text-2xl w-4/5 mt-6 md:mt-8 text-center">
          We aim to simplify land buying, connect buyers with ideal properties, and empower clients through ethical practices and excellent service.          </p>
        </div>
        <Image
          src="/assets/contactland.jpg"
          width={500}
          height={200}
          className="h-[400px] w-[450px] object-cover rounded-md mr-10 ml-24 md:ml-0 mt-4 md:mt-0" alt="land sale"       />
      </div>

      <div className="mt-8 bg-white p-2">
        <div className="flex flex-col md:flex-row justify-center items-center lg:ml-56">
          <Image
            src="/assets/contactland.jpg"
            width={500}
            height={350}
            className="h-[400px] w-[450px] object-cover rounded-md  md:mt-4 mb-4 " alt="land sale"         />
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl  mt:mt-8">OUR VISION</h1>
            <div className="h-1 w-24 md:ml-30 mb-[10px] bg-red-600"></div>

            <p className="text-2xl text-center w-4/5 md:w-2/3 mt-8 md:mt-20">
            To be Nairobi&apos;s top land selling platform, renowned for integrity, transparency, and customer satisfaction.

</p>
          </div>
        </div>
      </div>

      {/* core values */}
      {/* <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mt-8"> OUR CORE VALUES</h1>
          <div className="h-1 w-16  mb-[10px] bg-red-600"></div>
        </div>
        <div className="md:flex gap-8 md:mt-16 max-w-6xl mx-auto">
          {values.map((value) => (
            <div key={value.id}>
              <CoreValue value={value} />
            </div>
          ))}
        </div>
      </div> */}

      <div className="mt-8 p-2 box-border">
        <Image
          src="/assets/contactland.jpg"
          width={500}
          height={300}
          className="w-full h-[450px] max-w-full object-cover rounded-sm" alt="land sale"        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mt-8"> OUR TEAM</h1>
          <div className="h-1 w-16  mb-[10px] bg-red-600"></div>
          <div className="mt-8 flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold">OUR BOARD</h3>
            <div className="h-1 w-16  mb-[10px] bg-red-600"></div>


            {/* <div className="grid sm:grid-col md:grid-cols-2 max-w-6xl">
              {boardMembers.map((member) => (
                <div key={member.id} className="">
                  <BoardMembers member={member} />
                </div>
              ))}
            </div> */}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center md:mb-12">
            <h3 className="text-xl font-semibold mb-4">OUR MEMBERS</h3>
            <div className="h-1 w-16  mb-[10px] bg-red-600"></div>


            {/* <div className="md:flex gap-8">
              {allMembers.map((memba) => (
                <div key={memba.id} className="">
                  <AllMembers memba={memba} />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
