import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // or use any icon library you prefer

const departmentsData = {
  Trainings: [
    {
      title: "Sunday School",
      description: [
        "Teaches biblical foundations every Sunday.",
        "Guides members through scripture.",
        "Trains teachers for Christian education."
      ],
      leader: {
        name: "John Doe",
        position: "Head of Sunday School",
        image: "/gallery/bridge1.png",
      },
    },
    {
      title: "Baptismal Class",
      description: [
        "Prepares believers for water baptism.",
        "Handles foundational Christian doctrines.",
        "Supports new believers with spiritual mentorship."
      ],
      leader: {
        name: "Jane Smith",
        position: "Coordinator of Baptismal Class",
        image: "/images/leader2.jpg",
      },
    },
  ],
  Discipleship: [
    {
      title: "New Believers Class",
      description: [
        "Nurtures spiritual growth for new believers.",
        "Introduces the basics of Christian living.",
        "Organizes follow-up and care sessions."
      ],
      leader: {
        name: "Paul Isaac",
        position: "Discipleship Director",
        image: "/images/leader3.jpg",
      },
    },
  ],
};

export default function Department() {
  const [activeTab, setActiveTab] = useState("Trainings");
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <div className=" bg-white mx-auto space-y-16 px-6 py-10">
       <div class="container-max section-padding">
             <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Big Text */}
        <div className="flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl  leading-tight">
            Empowering Lives Through Dedicated Departments
          </h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-60 w-full rounded overflow-hidden">
              <img
                src={`/department/${i}.png`}
                alt={`department-${i}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay for bottom two */}
              {i > 2 && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

       <div className="space-y-10 py-20">
        <h2 className="text-3xl font-bold text-center">Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Tabs */}
<div className="flex flex-col space-y-3 w-full max-w-xs">
  {Object.keys(departmentsData).map((tab) => (
    <button
      key={tab}
      onClick={() => {
        setActiveTab(tab);
        setOpenAccordion(null); // reset accordion
      }}
      className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200
        ${
          activeTab === tab
            ? "bg-orange-500 text-white"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
    >
      {tab}
    </button>
  ))}
</div>
          {/* Accordions */}
          <div className="space-y-4">
            {departmentsData[activeTab].map((dept, index) => (
              <div key={index} className="border rounded-lg">
                <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
                  <span className="font-semibold text-base">{dept.title}</span>
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === index ? null : index)
                    }
                    className="p-1"
                  >
                    {openAccordion === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {openAccordion === index && (
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-black space-y-2">
                      {dept.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    <div className="flex flex-col items-end text-right">
                      <img
                        src={dept.leader.image}
                        alt={dept.leader.name}
                        className="w-24 h-24 object-cover rounded-full mb-2"
                      />
                      <span className="text-sm font-semibold text-gray-800">{dept.leader.name}</span>
                      <span className="text-xs text-gray-500">{dept.leader.position}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>
    </div>
  );
}
