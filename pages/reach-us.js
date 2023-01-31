import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

export default function ReachUs() {
  return (
    <>
      <Head>
        <title>Contact Us - Rising Voices Africa</title>
        <meta name="description" content="The Voice Of The Voiceless" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full px-5 lg:px-20">
        <Header />
      </section>
    </>
  );
}
