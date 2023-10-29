import Image from "next/image"
import { useRouter } from "next/router";
import Loading from "./loading";
import { listingsData }  from '@/components/reusableData/listingsDat'

export default function ListingDetails() {
    const router = useRouter();
    const {id } = router.query;

    if (!router.isReady) {
        return <Loading />;
    }

    const listingItem = listingsData.find((listing) => listing.id === Number(id));

    if(!listingItem) {
        return (
            <Loading />
        )
    }
    return (
      <div className="w-full bg-blue-100 mt-32">
        <div className="max-w-[80%] mx-auto flex flex-col items-center justify-center">
        <Image src={listingItem.image} width={500} height={500} alt="land for sale" className="object-cover"/> 
        <h1 className="text-center text-[2rem text-blue-400 font-[600]">{listingItem.location}</h1>
        <p className="text-center text-3xl font-semibold">{listingItem.description}</p>
        </div>
      </div>
    );
  }
  