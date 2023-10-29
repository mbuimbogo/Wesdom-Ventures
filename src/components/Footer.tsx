import { TiSocialFacebook } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 pb-0">
      <div className="flex flex-wrap justify-between pb-6">
        <div className="w-full md:w-1/3 px-4 flex flex-col items-center">
          <h2 className="mb-4 text-uppercase font-bold">NAVIGATION</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline text-xl">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-xl">
                What we do
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-xl">
                Events
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 border-t border-white md:border-t-0 md:border-l px-4 mt-4 md:mt-0 flex flex-col items-center">
          <h2 className="mb-4 text-uppercase font-bold">SUPPORT</h2>
          <div className="flex-1 items-center">
            <a href="#" className="hover:underline text-xl">
              Learn more
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 border-t border-white md:border-t-0 md:border-l px-4 mt-4 md:mt-0 flex flex-col items-center">
          <h2 className="mb-4 text-uppercase font-bold">CONTACT US</h2>
          <ul className="flex gap-9">
            <li>
              <a href="#" className="hover:underline">
                <MdOutlineEmail className="h-8 w-8 text-red-400" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <TiSocialFacebook className="h-8 w-8 text-red-400" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <AiOutlineInstagram className="h-8 w-8 text-red-400" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <AiOutlineTwitter className="h-8 w-8 text-red-400" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray py-4 text-center text-uppercase">
        <h2 className="text-white font-bold text-xl">
          Wesdom <span className="text-red-600">Ventures</span> | COPYRIGHT{" "}
          {new Date().getFullYear()}
        </h2>
      </div>
    </footer>
  );
}