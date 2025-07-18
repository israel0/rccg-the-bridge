import React from 'react'
import { useState } from "react";

const historyData = [
  {
    id: 1,
    title: "2021",
    text: "We began with a small team committed to transforming lives through faith and leadership.",
    image: "/gallery/bridge1.png",
  },
  {
    id: 2,
    title: "2022",
    text: "Our outreach expanded to multiple cities, bridging new communities together.",
    image: "/gallery/bridge2.png",
  },
  {
    id: 3,
    title: "2023",
    text: "We embraced digital platforms to extend our mission globally.",
    image: "/gallery/bridge3.png",
  },
  {
    id: 4,
    title: "2024",
    text: "A community of servant-leaders emerged, now influencing every sector of society.",
    image: "/gallery/bridge4.png",
  },
];

export default function OurHistory() {
  const [selected, setSelected] = useState(1);
  const current = historyData.find((item) => item.id === selected);

  return (
    <section className="container-max section-padding  mx-auto px-6 lg:px-20 py-[5rem]">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-16">Our History</h2>

      <div className="relative mb-16">
        <div className="absolute top-1/2 w-full h-1 bg-gray-300 transform -translate-y-1/2"></div>
        <div className="flex justify-between relative z-10">
          {historyData.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`w-20 h-20 rounded-full z-10 text-lg font-bold flex items-center justify-center transition-all duration-300
                ${
                  selected === item.id
                    ? "bg-orange-500 text-white scale-110"
                    : "bg-white border-2 border-gray-400 text-black"
                }`}
            >
              {item.id}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div className="flex flex-col md:flex-row md:items-start space-y-4 lg:space-y-0">
      <div className="text-left mb-4">
      <div className="font-semibold text-3xl text-gray-800 mb-2">
      {current.title}
      </div>
      <div className="text-xl text-black">
      {current.text}
      </div>
      </div>
      </div>
    


        <div className="h-full flex items-center justify-center">
          <img
            src={current.image}
            alt={current.title}
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
