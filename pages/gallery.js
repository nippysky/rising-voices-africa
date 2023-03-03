import React, { useState } from "react";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import eventImages from "@/utilities/eventImage";

function Gallery() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Head>
        <title>Event Gallery - Rising Voices Africa</title>
        <meta
          name="description"
          content="Pictures From Our Events and Out Reach."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section className="w-full lg:h-screen px-5 lg:px-20">
        <div className="w-full h-[10%]">
          <Header />
        </div>

        {/* Render Images on Grid */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 my-20 pb-20">
          {eventImages.map((item) => (
            <div key={item.id} className="w-full group">
              <Image
                src={item.image}
                alt={item.title}
                width={725}
                height={540}
                priority
                className={`group-hover:opacity-90 rounded-lg ${
                  loading
                    ? "grayscale blur-2xl scale-110"
                    : "grayscale-0 blur-0 scale-100"
                }`}
                onLoadingComplete={() => setLoading(false)}
              />

              <h4 className="my-3 font-semibold text-[0.85rem]">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
