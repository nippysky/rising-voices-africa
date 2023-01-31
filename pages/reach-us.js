import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function ReachUs() {
  return (
    <>
      <Head>
        <title>Contact Us - Rising Voices Africa</title>
        <meta name="description" content="The Voice Of The Voiceless" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full lg:h-screen px-5 lg:px-20">
        {/* Navbar Header */}
        <section className="w-full h-[10%]">
          <Header />
        </section>

        {/* Main Hero Section */}
        <section className="w-full h-[85%] flex flex-col lg:flex-row justify-between items-center gap-10 py-20 lg:py-0">
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-black font-extrabold text-3xl">Contact Us</h1>
            <p className="mt-3 mb-10 font-normal text-[1.2rem]">
              If you have an enquiry, needs or want to have a chat with us,
              kindly do so through the following media:
            </p>

            {/* Social Links */}
            <Link href={"mailto:risingvoicesafrica@gmail.com"}>
              <div className="flex items-center gap-10 mb-7">
                <span>
                  <MdEmail size={25} />
                </span>

                <span>risingvoicesafrica@gmail.com</span>
              </div>
            </Link>

            <Link href={"tel:+2349030118723"}>
              <div className="flex items-center gap-10 mb-7">
                <span>
                  <BsTelephoneFill size={25} />
                </span>

                <span>+234 903 011 8723</span>
              </div>
            </Link>

            <Link
              href={
                "https://www.facebook.com/groups/288494279172370/?ref=share&mibextid=NSMWBT"
              }
            >
              <div className="flex items-center gap-10 mb-7">
                <span>
                  <FaFacebook size={25} />
                </span>

                <span>Facebook</span>
              </div>
            </Link>

            <Link href={"https://www.linkedin.com/company/risingvoicesafrica"}>
              <div className="flex items-center gap-10 mb-7">
                <span>
                  <FaLinkedin size={25} />
                </span>

                <span>LinkedIn</span>
              </div>
            </Link>
          </div>

          <div>
            <Image
              src={"/brand/RVAIcon.svg"}
              priority
              width={400}
              height={400}
            />
          </div>
        </section>
      </section>
    </>
  );
}
