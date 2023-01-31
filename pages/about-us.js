import React from "react";
import Header from "@/components/Header";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Rising Voices Africa</title>
        <meta name="description" content="The Voice Of The Voiceless" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full px-5 lg:px-20">
        <Header />
      </section>

      <main></main>
    </>
  );
}
