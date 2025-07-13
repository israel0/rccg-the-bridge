import React from "react";
import { useEffect, useState } from "react";
import "../../animation.css";

export default function AnimatedSection() {
  const [scattered, setScattered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScattered(true);
    }, 2500); // Time after all images are stacked

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center py-[3rem] px-3 lg:px-10 max-w-[1480px] mx-auto overflow-hidden">
      {/* Image stack center */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {[1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src="/gallery/bridge1.png"
            alt={`bridge-${i}`}
            className={`img-animate absolute w-32 opacity-0`}
            style={{ "--i": i }}
            data-scattered={scattered ? "true" : "false"}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="text-center max-w-2xl z-20">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary-dark animate-fade-in">
          By connecting the Word to the world, we see transformed lives, stronger families, and communities renewed in Christ.
        </h2>
      </div>
    </section>
  );
}
