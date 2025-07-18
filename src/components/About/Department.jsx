import React, { useRef, useEffect } from "react";
import {Link} from "react-router-dom"

const departments = [
  { name: "DN Anuoluwapo", title: "Sunday School Department",  image: "/pastorate/15.png" },
  { name: "DNS Inement ", title: "Counselling Department", image: "/pastorate/15.png" },
  { name: "DN Tobilola", title: "Training Department", image: "/pastorate/15.png" },
  { name: "DN Boyo", title: "Media Department", image: "/pastorate/15.png" },
  { name: "DN Adegoke", title: "Media Department", image: "/pastorate/15.png" },
  { name: "Chris Evans", title: "Media Department", image: "/pastorate/15.png" },
  { name: "Linda Green", title: "Media Department", image: "/pastorate/15.png" },
  { name: "Robert Black", title: "Media Department", image: "/pastorate/15.png" },
  { name: "Laura Grey", title: "Media Department", image: "/pastorate/15.png" },
  { name: "Steve Blue", title: "Media Department", image: "/pastorate/15.png" },
];

export default function Department() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="container-max section-padding mx-auto px-6 lg:px-20 py-[5rem]">
      {/* First Row: Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-center">
        <div>
          <h2 className="text-xl font-bold mb-4">Departments & Ministries</h2>
          <p className="  text-3xl mb-6">
           There's room for you here, room to serve, to lead, and to grow in purpose. At The Bridge, our departments are more than just teams, they're families on assignment. Step in and discover where your gifts fit in God's plan.
          </p>

            <Link to="/department" >
                <button className="btn-primary" >
              Go to Departments
              <img 
                src="/icons/arrow-icon-9.svg" 
                alt="Arrow" 
                className="w-4 h-3"
              />
            </button>
            </Link>

        </div>
        <div></div>
      </div>

      {/* Second Row: Scrollable Team Members */}
      <div ref={scrollRef} className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 w-max pr-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="min-w-[300px] min-h-[300px] bg-white-100 rounded-xl shadow p-4 transform transition-transform duration-700 ease-out translate-x-full animate-slide-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <img
                src={dept.image}
                alt={dept.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{dept.name}</h3>
              <p className="text-sm text-gray-500">{dept.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
