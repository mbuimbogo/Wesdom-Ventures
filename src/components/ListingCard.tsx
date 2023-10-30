import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ListingCardProps {
  listingId: number;
  location: string;
  description: string;
  image: StaticImageData;
}

const ListingCard: React.FC<ListingCardProps> = ({ listingId, location, description, image }) => {
  return (
    <div className="w-full">
      <Link href={`/listings/${listingId}`}>
        <div className="w-[90%] mx-auto flex-col justify-center items-center bg-white  text-blue-300  gap-2 rounded-md py-2 px-2 box-border">
          <Image
            src={image}
            alt="land sale "
            className=" rounded-md  py-2 w-full h-full"
            width={300}
            height={300}
          />
          <h5 className="text-center text-[1.5rem] font-[700]">{location}</h5>
          <p className="text-center mb-4 text-[1.3rem] font-[400]">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
