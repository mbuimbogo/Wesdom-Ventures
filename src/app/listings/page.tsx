import Image from 'next/image'
import React from 'react'
import landSale from "../../../public/assets/landSale.jpg";
import ListingCard from '@/components/ListingCard';
import { listingsData } from '@/components/reusableData/listingsDat'
type Props = {}

const ProjectListings = (props: Props) => {
  return (
    <div className='bg-blue-100 mt-32'>
        <div className="max-w-[90%] mx-auto py-4">
            <div className=" flex flex-col md:flex-row gap-32 justify-center items-center">
                <Image src='/assets/landSale.jpg' alt='land for sale' width={500} height={500} />
            <p className='text-center text-2xl w-1/2'>Explore our carefully curated selection of land properties available for sale in Nairobi and its environs. Use the filters to refine your search based on location, size, price, or type of land. Click on each listing to view more details and contact us for any inquiries or to schedule a site visit. We're here to help you find your perfect piece of land.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                {listingsData.map((listing)=> (
                        <ListingCard  key={listing.id} listingId = {listing.id} location={listing.location} description={listing.description} image={listing.image}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectListings