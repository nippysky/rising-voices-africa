import Image from "next/image";
import React from "react";

export default function BoardOfTrustee({ image, name }) {
  return (
    <div className="w-full">
      <div className="flex justify-center lg:justify-start">
        <Image src={image} alt={name} width={500} height={500} priority />
      </div>

      <div className="mt-3 text-center lg:text-left">
        <h4 className="font-bold text-brandBlue text-[1rem] mb-2">{name}</h4>

        <h5 className="font-semibold italic text-brandYellow text-[1rem]">
          Board Of Trustee
        </h5>
      </div>
    </div>
  );
}
