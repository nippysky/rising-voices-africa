import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

const programDetails = [
  {
    head: "Love To The Streets",
    text: "This is a quarterly program set out to show love to homeless people living on the streets. We go out there to share food and gift items as well as hope to them. We select a number of people to bring back to our shelter from each edition we carry out.",
  },

  {
    head: "Charity And Gospel",
    text: "This is a specially designed event to reach out to rural communities in different parts of Africa to preach the gospel, with the strong move of God evident. Then we also seek out a basic need the community has and we make provision for that need.",
  },

  {
    head: "Whole Again Network",
    text: "This is a segment of the NGO targeted at domestic violence, rape, child abuse victims, drug addicts, etc. Here we have an round chair meeting to discuss different form of addictions and pains with counsellors to see people through their healing process.",
  },

  {
    head: "Knowledge Gain Campaign",
    text: "This is a skill acquisition program set aside to train people of all ages on different skills both digital and physical, to empower them for financial freedom.",
  },

  {
    head: "Old And Productive Network",
    text: "This is an event set aside to honor the elderly people in the society. We reach out to elderly people who have somewhat been abandoned by their families to die. We bring them back to our specially designed home for the elderly, to take care of them.",
  },

  {
    head: "School Sensitization",
    text: "This is an event carried out in different primary and secondary schools to educate young children and teenagers on different essential topics relevant in this day and time.",
  },
];

export default function OurProgramDetails() {
  return (
    <section className="w-full px-5 lg:px-20 my-10 pb-10">
      <h1 className="text-center text-black text-3xl font-extrabold">
        Our Program Details
      </h1>

      <div className="w-full gap-20 grid xl:grid-cols-3 lg:grid-cols-2 lg:mt-20 mt-10">
        {programDetails.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            transition={{ ease: "easeOut", duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h1
              className={`text-xl font-bold text-center lg:text-left ${
                index % 2 === 0 ? "text-brandYellow" : "text-brandBlue"
              }`}
            >
              {program.head}
            </h1>

            <p className="mt-5 text-center lg:text-justify">{program.text}</p>
          </motion.div>
        ))}
      </div>

      <Link href={"/gallery"}>
        <div className="w-full flex justify-center mt-20">
          <button className="rounded-full text-white bg-brandYellow py-3 px-10 font-medium hover:bg-brandBlue">
            View Event Gallery
          </button>
        </div>
      </Link>
    </section>
  );
}
