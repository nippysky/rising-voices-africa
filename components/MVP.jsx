import React from "react";
import MissionVision from "./MissionVision";
import { motion } from "framer-motion";

const programs = [
  "Love To The Streets",
  "Charity And The Gospel",
  "Whole Again Network",
  "Knowledge Gain Campaign",
  "Old And Productive Network",
  "School Sensitization",
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
            <motion.div
              key={index}
              className={`w-full flex justify-center items-center py-5 font-semibold tracking-wide ${
                index % 2 === 0
                  ? "border border-brandYellow hover:bg-brandYellow hover:text-white"
                  : "border border-brandBlue hover:bg-brandBlue hover:text-white"
              }`}
              initial={{ opacity: 0, y: 200 }}
              transition={{ ease: "easeOut", duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {program}
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
