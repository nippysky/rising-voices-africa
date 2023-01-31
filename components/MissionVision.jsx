import React from "react";

export default function MissionVision() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {/* Vision */}
      <div className="w-full lg:w-1/2 bg-brandYellow px-5 lg:px-20 py-10 text-white">
        <h3 className="text-2xl font-bold tracking-wide mb-8">Our Vision</h3>
        <p className="font-normal">
          Eradicate Poverty and hunger and build a less stigmatized and
          segregated society.
        </p>
      </div>

      {/* Mission */}
      <div className="w-full lg:w-1/2 bg-brandBlue px-5 lg:px-20 py-10 text-white">
        <h3 className="text-2xl font-bold tracking-wide mb-8">Our Mission</h3>
        <p className="font-normal">
          To give everyone a sense of belonging in the society by closing the
          level of poverty gap that exists as well as restoring the rights and
          dignity of people.
        </p>
      </div>
    </section>
  );
}
