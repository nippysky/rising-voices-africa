import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";

export default function Header() {
  const { asPath } = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full flex justify-between items-center relative py-2">
      {/* LOGO */}
      <div className="w-1/2 flex justify-start">
        <Link href={"/"}>
          <Image src={"/brand/RVALOGO.svg"} width={120} height={50} priority />
        </Link>
      </div>

      {/* NAV LINKS */}
      <nav className="w-1/2 hidden lg:inline-flex justify-end gap-10 items-center">
        <Link href={"/about-us"}>
          <div
            className={`font-medium tracking-wide text-black ${
              asPath === "/about-us" && "text-brandYellow underline font-bold"
            }`}
          >
            About Us
          </div>
        </Link>

        <Link href={"/reach-us"}>
          <div
            className={`font-medium tracking-wide text-black ${
              asPath === "/reach-us" && "text-brandBlue underline font-bold"
            }`}
          >
            Reach Us
          </div>
        </Link>

        <Link href={"/donate"}>
          <button className="rounded-full text-white bg-brandBlue py-3 px-10 font-medium hover:bg-brandYellow">
            Donate
          </button>
        </Link>
      </nav>

      {/* HamBurger Menu */}
      <div
        className="lg:hidden inline-flex cursor-pointer text-brandBlue"
        onClick={() => setMobileMenu(true)}
      >
        <CgMenuRight size={30} />
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <section className="w-[50%] h-screen fixed top-0 right-0 bg-brandBlue pt-5 px-5 z-50 duration-500">
          <div className="text-white flex justify-end ">
            <div
              className="cursor-pointer"
              onClick={() => setMobileMenu(false)}
            >
              <IoClose size={30} />
            </div>
          </div>

          <nav className="flex flex-col gap-10 mt-10 text-white">
            <Link href={"/about-us"}>
              <span
                className={`font-medium tracking-widest text-[0.85rem] ${
                  asPath === "/about-us"
                    ? "bg-white text-brandBlue px-2 py-1"
                    : "null"
                }`}
              >
                About Us
              </span>
            </Link>

            <Link href={"/reach-us"}>
              <span
                className={`font-medium tracking-widest text-[0.85rem] ${
                  asPath === "/reach-us"
                    ? "bg-white text-brandBlue px-2 py-1"
                    : "null"
                }`}
              >
                Reach Us
              </span>
            </Link>

            <Link href={"/donate"}>
              <div className="flex justify-center mt-5">
                <button className="rounded-full text-white bg-brandYellow py-3 px-10 font-medium hover:bg-white hover:text-brandBlue">
                  Donate
                </button>
              </div>
            </Link>
          </nav>
        </section>
      )}
    </header>
  );
}
