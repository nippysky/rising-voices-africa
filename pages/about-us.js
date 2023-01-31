import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import MissionVision from "@/components/MissionVision";
import FounderAndBoard from "@/components/FounderAndBoard";
import OurProgramDetails from "@/components/OurProgramDetails";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Rising Voices Africa</title>
        <meta name="description" content="The Voice Of The Voiceless" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section className="w-full lg:h-screen px-5 lg:px-20">
        <div className="w-full h-[10%]">
          <Header />
        </div>

        <div className="w-full h-[85%] flex items-center justify-center py-20 lg:py-0">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <h1 className="text-brandBlue text-4xl font-black">Who We Are</h1>
            <p className="text-black font-normal tracking-wide text-xl my-10 lg:px-32">
              Rising Voices frica is a human rights NGO aimed at seeking justice
              and fair treatment for victims of any form of In human treatment
              in Africa. We also help amplify the voices of the underprivileged
              who are in dire need of basic amenities to survive in different
              parts of Africa, through our various programs and movements
              supported by our partners and sponsors.
            </p>

            <Link href={"/"}>
              <button className="rounded-full text-white bg-brandYellow py-3 px-10 font-medium hover:bg-brandBlue">
                View Event Gallery
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Rest Of Page */}
      <main>
        <MissionVision />
        <FounderAndBoard />
        <OurProgramDetails />
      </main>
    </>
  );
}
