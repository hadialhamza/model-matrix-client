import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import RecentModelCard from "../Cards/Card";

const RecentModels = () => {
  const api = useAxios();
  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get("models/recent")
      .then((res) => {
        // console.log(res.data.result);
        setModels(res?.data?.result);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [api]);

  return (
    <section className="mt-12">
      <div className="section-container">
        <div className="mb-16 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="section-title">Recent AI Models</h2>
            <p className="section-subtitle">
              Explore the latest AI models added to ModelMatrix AI. Recently
              created models appear here automatically.
            </p>
          </div>
          <div className="w-1/2 text-end pr-4 md:pr-8">
            <a
              href="/all-models"
              className="text-lg font-semibold text-emerald-400 hover:text-emerald-300"
            >
              View all models →
            </a>
          </div>
        </div>

        {/* Content: loading / error / grid */}
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="h-[254px] w-full max-w-xs rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm animate-pulse"
              >
                <div className="mx-4 mt-4 h-32 rounded-xl bg-slate-800/70" />
                <div className="mt-4 space-y-2 px-6">
                  <div className="h-4 w-2/3 rounded bg-slate-800" />
                  <div className="h-3 w-full rounded bg-slate-800" />
                </div>
                <div className="mt-6 px-6 pb-6">
                  <div className="h-9 w-full rounded-lg bg-slate-800" />
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && models.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((model) => (
              <RecentModelCard key={model._id} model={model} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentModels;
