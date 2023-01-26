import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
  
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
  {
  window.location.href=`mailto:abhinav.kumar2712@gmail.com?subject= ${formData.subject}&body=Hi,my name is ${formData.name} and my email is ${formData.email}. ${formData.message}`;
  }
  
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-20 uppercase tracking-[20px] text-[#c2c2c4] text-2xl">
        Contact
      </h3>
      <div className="mt-[230px] flex flex-col space-y-10">
        <h5 className="mt-[50px] text-2xl font-semibold text-center">
          Find me cool?{" "}
          <span className="decoration-[#f7ab0a]/60 underline">Lets Talk!</span>
        </h5>

        <div className=" mr-14">
          <div className=" flex items-center space-x-5 justify-center ">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-1xl ">+91 9582507930</p>
          </div>

          <div className="flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-1xl ">abhinav.kumar2712@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center ">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-1xl ">Noida,UP,India </p>
          </div>
        </div>

        <div className="mt-[300px] ">
          <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col space-y-2 w-fit">
            {" "}
            {/*     mx-auto */}
            <div className="flex space-x-2">
              <input {...register('name')} className="contactInput" placeholder="Name" type="text" />
              <input {...register('email')}
                className="contactInput"
                placeholder="Email"
                type="email"
              />
            </div>
            <input {...register('subject')} className="contactInput" placeholder="Subject" type="text" />
            <textarea {...register('message')} className="contactInput" placeholder="Message" />
            <button className=" bg-[#f7ab0a] py-5 px-10 rounded-sm rounded-md text-black font-bold text-lg">
              Submit
            </button>
            <div className="p-12"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
