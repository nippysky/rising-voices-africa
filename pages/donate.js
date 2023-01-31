import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

export default function Donate() {
  return (
    <>
      <Head>
        <title>Support Us - Rising Voices Africa</title>
        <meta name="description" content="The Voice Of The Voiceless" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full lg:h-screen px-5 lg:px-20">
        <div className="w-full h-[10%]">
          <Header />
        </div>

        <div className="w-full h-[85%] flex items-center justify-center py-20 lg:py-0">
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-3xl font-bold text-brandBlue tracking-wider">
              Donation Portal Unavailable. We Are Developing...
            </h1>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={"/brand/RVAIcon.svg"}
              priority
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
}
