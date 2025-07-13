import React from "react"

const leaders = [
  {
    name: "Pastor Oluwafemi Oyewunmi",
    position: "Lead Pastor",
    image: "/pastorate/11.png",
  },
  {
    name: "Pastor (Mrs) Life Oyewunmi",
    position: "Assistant Pastor",
    image: "/pastorate/12.png",
  },
  {
    name: "Pastor Olushola Oladejo",
    position: "Assistant Pastor",
    image: "/pastorate/13.png",
  },
  {
    name: "Pastor Derayo Oladejo",
    position: "Assistant Pastor",
    image: "/pastorate/14.png",
  },
  {
    name: "Pastor Bolaji Asifat",
    position: "Associate Pastor",
    image: "/pastorate/15.png",
  },
   {
    name: "Pastor Asifat",
    position: "Associate Pastor",
    image: "/pastorate/15.png",
  },
];

export default function Leadership() {
  return (
    <section className="container-max section-padding mx-auto px-6 lg:px-20 py-[5rem]">
      <h2 className="text-4xl font-bold text-center mb-12">Our Leadership</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {leaders.map((leader, index) => (
          <div key={index} className="text-center">
          <img
          src={leader.image}
          alt={leader.name}
          className="w-80 h-80 object-cover rounded-md mx-auto mb-4 shadow-md"
          />
          <h3 className="text-2xl font-semibold text-gray-800">{leader.name}</h3>
          <p className="text-gray-600 text-lg">{leader.position}</p>
          </div>

        ))}
      </div>
    </section>
  );
}
