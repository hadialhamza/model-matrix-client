import React from "react";
import { Link } from "react-router";

const RecentModelCard = ({ model }) => {
  const { _id, name, image, framework, useCase, description } = model;

  const shortDescription =
    description?.length > 90
      ? description.slice(0, 90) + "..."
      : description || "No description available.";

  const fallbackImage =
    "https://via.placeholder.com/400x240.png?text=Model+Preview";

  return (
    <div className="group relative flex w-full max-w-xs flex-col rounded-xl bg-linear-to-br from-white to-slate-50 bg-clip-border text-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Top illustration / image area */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg">
        {/* Actual model image */}
        <img
          src={image || fallbackImage}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/40 to-transparent" />

        {/* subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Icon and basic info on top of image */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-white/90 transform transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83zM11 16h2v2h-2zm0-6h2v4h-2z" />
          </svg>

          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/80">
            {framework}
          </p>
          <p className="text-xs text-white/90">{useCase}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h5 className="mb-2 block text-xl font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
          {name}
        </h5>
        <p className="text-sm font-light leading-relaxed text-gray-700">
          {shortDescription}
        </p>
      </div>

      {/* Button */}
      <div className="p-6 pt-0">
        <Link
          to={`/models/${_id}`}
          className="group/button relative inline-flex w-full items-center justify-center rounded-lg bg-linear-to-r from-emerald-500 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-600 hover:to-sky-600 hover:shadow-emerald-500/40"
        >
          <span className="relative flex items-center gap-2">
            View Details
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="h-5 w-5 transform transition-transform duration-300 group-hover/button:translate-x-1"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default RecentModelCard;
