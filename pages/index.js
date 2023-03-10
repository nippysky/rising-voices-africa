import Facts from "@/components/Facts";
import Hero from "@/components/Hero";
import MVP from "@/components/MVP";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rising Voices Africa</title>
        <meta name="description" content="The Voice Of The Voiceless" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <Hero />
        <MVP />
        <Facts />
      </main>
    </>
  );
}
