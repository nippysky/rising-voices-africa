import React from "react";
import MissionVision from "./MissionVision";

const programs = [
  "Love On The Streets",
  "Charity And Gospel",
  "Whole Again Network",
  "Knowledge Gain Campaign",
  "Old And Productive Network",
  "School Sentitization",
];

export default function MVP() {
  return (
    <section className="w-full pb-10">
      <MissionVision />

      <section className="w-full px-5 lg:px-20 mt-10">
        <h1 className="text-center text-brandBlue text-2xl font-bold mb-10">
          Programs
        </h1>

        <div className="grid md:grid-cols-2 gap-10 my-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`w-full flex justify-center items-center py-5 font-semibold tracking-wide ${
                index % 2 === 0
                  ? "border border-brandYellow hover:bg-brandYellow hover:text-white"
                  : "border border-brandBlue hover:bg-brandBlue hover:text-white"
              }`}
            >
              {program}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
