import React from "react";

const Circle = () => {
  return (
    <div className="relative grid h-[300px] w-[270px] place-items-center overflow-hidden rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.4),0_2px_25px_rgba(0,0,0,0.5)]">
      {/* Spinning gradient strip (replacement for .cardBox::before) */}
      <div className="pointer-events-none absolute h-[150%] w-[40%] bg-linear-to-r from-pink-500 via-orange-400 to-teal-300 animate-[spin_5s_linear_infinite]" />

      {/* Inner card */}
      <div className="group relative z-10 flex h-[95%] w-[95%] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#000814] p-5 text-center text-white shadow-[inset_0_30px_60px_-12px_rgba(0,0,0,0.4),inset_0_18px_36px_-18px_rgba(0,0,0,0.5)]">
        {/* Big ghost text */}
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold opacity-10">
          Hover Me
        </span>

        {/* Hover content */}
        <div className="relative translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[1.6rem] leading-[25px]">Hi, put your text here</p>
        </div>
      </div>
    </div>
  );
};

export default Circle;
