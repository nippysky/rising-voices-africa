import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";

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
        <motion.div
          className="w-full lg:w-1/2 lg:pr-20 mt-20 lg:mt-0 text-center lg:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h1 className="text-brandYellow italic font-black text-2xl lg:text-4xl mb-7">
            We Are The Voice For The Voiceless
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
        </motion.div>

        {/* map of africa */}
        <motion.div
          className="w-full lg:w-1/2 flex lg:justify-end justify-center mb-10 lg:mb-0"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Image
            src={"/brand/MapOfAfrica.svg"}
            alt={"RVA Map Of Africa"}
            width={450}
            height={200}
            priority
          />
        </motion.div>
      </section>
    </section>
  );
}
