import React, { useRef, useEffect, useState } from "react";
import {Link} from "react-router-dom"

export default function OverlayScrollSection() {
  const imageRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const { top, height } = imageRef.current.getBoundingClientRect();
        const scrollProgress = Math.min(Math.max((window.innerHeight - top) / height, 0), 1);
        setOffset(scrollProgress * 50); // Adjust `50` for parallax strength
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center py-40 px-6 sm:px-10"
      style={{
        backgroundImage: "url('/gallery/bridge8.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Left: Text */}
        <div className="text-white text-center md:text-left px-2 md:px-0">
          <h2 className="text-white text-3xl py-5 font-medium max-w-md mx-auto md:mx-0">Our mission is soul care</h2>
          <p className="text-neutral-light py-7 text-xl leading-relaxed max-w-md mx-auto md:mx-0">
            At RCCG Living Seed Church, The Bridge, we believe that no one should walk alone through life’s challenges.
            Our dedicated counselling ministry is here to offer a listening ear, prayerful support, and biblical guidance
            in times of need.
          </p>

          <div classNam="py-0">
              <Link to="/department">
                <button to="/department" className="btn-primary" >
                   Go to counselling
                <img 
                src="https://static.codia.ai/custom_image/2025-06-29/070305/arrow-icon-9.svg" 
                alt="Arrow" 
                className="w-4 h-3"
                />
                </button>
              </Link>
          </div>
        </div>

        {/* Right: Parallax Image */}
        <div
          className="relative h-[250px] sm:h-[300px] overflow-hidden rounded-lg shadow-lg"
          ref={imageRef}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
            style={{
              backgroundImage: "url('/images/vision.jpg')",
              transform: `translateY(${offset}px)`,
            }}
          ></div>

          
        </div>
      </div>
    </section>
  );
}
