import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Facts() {
  return (
    <>
      <section className="w-full px-5 lg:px-20 flex flex-col lg:flex-row gap-20 justify-between items-center bg-brandBlue py-20">
        <div className="w-full hidden lg:w-1/2 lg:flex lg:justify-center">
          <Image
            src={"/brand/CollagePic.svg"}
            alt="Poor Children Of Africa"
            width={400}
            height={250}
            priority
          />
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            className="text-white mb-14 text-center lg:text-left"
            initial={{ opacity: 0, x: 200 }}
            transition={{ ease: "easeOut", duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h1 className="text-[1.5rem] font-bold tracking-wide mb-3">
              Over 3.2 Million
            </h1>
            <span className="lg:pr-40">
              children under the age of 5, die each year in Sub - Saharan
              Africa.
            </span>
          </motion.div>

          <motion.div
            className="text-white mb-14 text-center lg:text-left"
            initial={{ opacity: 0, x: 200 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h1 className="text-[1.5rem] font-bold tracking-wide mb-3">
              Over 30%
            </h1>
            <p className="lg:pr-40">
              rate of child sexual abuse in the world, prevails in Africa.
            </p>
          </motion.div>

          <motion.div
            className="text-white mb-14 text-center lg:text-left"
            initial={{ opacity: 0, x: 200 }}
            transition={{ ease: "easeOut", duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h1 className="text-[1.5rem] font-bold tracking-wide mb-3">
              Education
            </h1>
            <p className="lg:pr-40">
              Over one-fifth of children between the ages of about 6 and 11 are
              out of school.
            </p>
          </motion.div>
        </div>
      </section>

      <p className="text-center bg-brandBlue pb-10 text-white text-[1.1rem] px-5 lg:px-20">
        These are some of the reasons why we exist. To help reduce poverty,
        abuse and increase the educational knowledge in Africa.
      </p>
    </>
  );
}
