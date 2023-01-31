import Image from "next/image";
import React from "react";
import BoardOfTrustee from "./BoardOfTrustee";

export default function FounderAndBoard() {
  return (
    <section className="w-full px-5 lg:px-20 py-20">
      <h1 className="text-center text-black text-3xl font-extrabold">
        Founder And Board Of Trustee
      </h1>

      {/* Founder */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-20">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image src={"/team/Anita.svg"} width={500} height={400} priority />
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
          <h3 className="text-brandBlue text-2xl font-bold mb-3">
            Anita McCauley
          </h3>
          <span className="text-brandYellow text-xl italic font-semibold">
            Founder, Rising Voices Africa
          </span>

          <p className="text-black text-[1.1rem] my-5">
            Anita McCauley is a Human Rights advocate with a strong passion to
            speak up for people whose rights have been trampled upon as well as
            talking care and providing for the underprivileged in the African
            society. She is is a TV Presenter, Voice Over Artist, Podcaster and
            a Preacher of the Gospel.
          </p>
        </div>
      </div>

      {/* Board Of Trustee  */}
      <div className="w-full grid gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-20">
        <BoardOfTrustee
          image={"/team/Ifeanyi.svg"}
          name={"Dr. Ifeanyi Martins Nwokocha"}
        />

        <BoardOfTrustee
          image={"/team/Onyinye.svg"}
          name={"Dr. Oyinyechi Wariboko"}
        />

        <BoardOfTrustee
          image={"/team/Lucy.svg"}
          name={"Mrs. Lucy Ifeoma Chijioke"}
        />

        <BoardOfTrustee image={"/team/Sam.svg"} name={"Mr. Sam Itauma"} />
      </div>
    </section>
  );
}
