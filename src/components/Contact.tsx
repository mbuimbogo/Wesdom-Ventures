"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import contactLand from '../../public/assets/contactland.jpg'

export default function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="md:py-32 py-16 bg-blue-100 ">
      {/* Headings */}

      <div
        className="flex justify-end w-full"
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.5 }}
        // transition={{ duration: 0.5 }}
        // variants={{
        //   hidden: { opacity: 0, x: -50 },
        //   visible: { opacity: 1, x: 0 },
        // }}
      >
        <div className="w-[90%] mx-auto flex justify-end">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow "> CONTACT US </span> 
            TO GET STARTED
          </p>
        </div>
      </div>

      {/* Form and Image */}
      <div className="md:flex md:justify-between mt-5 w-[90%] mx-auto">
        <div
          className="basis-1/2 flex justify-center"
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.5 }}
          // transition={{ duration: 0.5 }}
          // variants={{
          //   hidden: { opacity: 0, y: 50 },
          //   visible: { opacity: 1, y: 0 },
          // }}
        >
          <Image src={contactLand} alt='contact land image' width={500} height={700} className="h-[400px]"/>
        </div>

        <div
          className="basis-1/2 mt-10 md:mt-0"
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.5 }}
          // transition={{ delay: 2, duration: 0.5 }}
          // variants={{
          //   hidden: { opacity: 0, y: 50 },
          //   visible: { opacity: 1, y: 0 },
          // }}
        >
          <p className='mb-6 text-xl'>Ready to find your perfect plot? Contact us today to schedule a consultation with our real estate experts. Let us help you make your land ownership dreams come true.</p>
          <form
            action="https://formsubmit.co/9695c39bfce2abbd59cfa3a22d36e7af
"
            onSubmit={onSubmit}
            target="_blank"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              type="text"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />

            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              type="text"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="MESSAGE"
              // rows="4"
              // cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />

            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Max Length is 2000 char ."}
              </p>
            )}

            <button
              className="p-5 bg-blue-400 font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}