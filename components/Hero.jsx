import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="w-full lg:h-screen px-5 lg:px-20">
      {/* Navbar Header */}
      <section className="w-full h-[10%]">
        <Header />
      </section>

      {/* Main Hero Section */}
      <section className="w-full h-[85%] flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* text */}
        <div className="w-full lg:w-1/2 lg:pr-20 mt-20 lg:mt-0 text-center lg:text-left">
          <h1 className="text-brandYellow italic font-black text-4xl mb-7">
            We Are The Voice Of The Voiceless
          </h1>

          <p className="text-black font-normal tracking-wide text-xl my-5">
            Rising Voices frica is a human rights NGO aimed at seeking justice
            and fair treatment for victims of any form of In human treatment in
            Africa.
          </p>

          <Link href={"/donate"}>
            <button className="rounded-full text-white bg-brandBlue py-3 px-10 font-medium hover:bg-brandYellow mt-5">
              Support Us
            </button>
          </Link>
        </div>

        {/* map of africa */}
        <div className="w-full lg:w-1/2 flex justify-end mb-10 lg:mb-0">
          <Image
            src={"/brand/MapOfAfrica.svg"}
            width={450}
            height={200}
            priority
          />
        </div>
      </section>
    </section>
  );
}
