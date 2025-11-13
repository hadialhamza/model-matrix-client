import React from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";

const RecentModelCard = ({ model }) => {
  const { _id, name, image, framework, useCase, description } = model || {};

  return (
    <div className="group relative border-2 border-slate-200 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)]">
      <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-clip-border shadow-xl">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-slate-900/20 to-transparent" />
      </div>

      <div
        className="text-center absolute -mt-11 left-1/2 -top-4 -translate-x-1/2 -translate-y-2
          rounded-full border border-emerald-400 bg-emerald-500/90 px-3 py-2 text-sm font-semibold text-white
          opacity-0 shadow-lg
          transition-all duration-300 ease-out
          group-hover:translate-y-1/2 group-hover:opacity-100"
      >
        {useCase}
      </div>

      <div className="p-6">
        <h5 className="mb-2 block text-xl font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
          {name}
        </h5>
        <p className="text-sm font-light leading-relaxed text-gray-700 mb-3">
          {description}
        </p>

        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
            {framework} Framework
          </span>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          to={`/models/${_id}`}
          className="group/button relative inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-emerald-500/40"
        >
          <span className="relative flex items-center gap-3">
            View Details
            <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default RecentModelCard;
