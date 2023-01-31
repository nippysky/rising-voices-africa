import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import { useRouter } from "next/router";

export default function Header() {
  const { asPath } = useRouter();

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
      <div className="lg:hidden inline-flex cursor-pointer text-brandBlue">
        <CgMenuRight size={30} />
      </div>
    </header>
  );
}
