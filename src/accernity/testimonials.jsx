import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = ""
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "150s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
          key={idx}
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: `radial-gradient(57.89% 132% at 65.79% -35%, rgba(120, 123, 255, 0.06) 0%, rgba(120, 123, 255, 0) 100%), 
                         linear-gradient(180deg, rgba(255, 255, 255, 0) 54.17%, rgba(255, 255, 255, 0.04) 100%), 
                         rgba(255, 255, 255, 0.01)`
          }}
          className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-900 p-[24px_28px] md:w-[450px]"
        >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              
              <div className="flex flex-row gap-[10px]  items-center mb-[24px]">
              <div><img src={item.person} className=" h-[50px] w-[50px] rounded-[50%] mt-[20px]"/></div>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-[#f4f0ff] font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-[#efedfd99] font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
              </div>
              <span className="relative z-20 text-md leading-[1.6] text-[#efedfdb3]">
                {item.description}
              </span>
          
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
