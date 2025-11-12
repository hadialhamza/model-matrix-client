import React from "react";

const AboutAiModels = () => {
  return (
    <section className="bg-slate-950 py-12 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        {/* Left content */}
        <div className="flex-1 space-y-4">
          <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Static Section 1
          </span>

          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            About AI Models
          </h2>

          <p className="text-sm text-slate-300 md:text-base">
            AI models are reusable intelligence blocks that learn patterns from
            data and make predictions, generate content or extract insights.
            From NLP and computer vision to time series forecasting, each model
            is trained on specific datasets and optimized for a particular use
            case.
          </p>

          <p className="text-sm text-slate-400 md:text-base">
            In{" "}
            <span className="font-semibold text-emerald-300">
              ModelMatrix AI
            </span>
            , every model is stored with its framework, dataset, creator and
            usage history. This makes it easier for teams to discover,
            understand and reuse models in a consistent way across projects.
          </p>

          <div className="mt-4 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">
                Why AI models matter
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300 md:text-sm">
                <li>• Automate decision-making and predictions</li>
                <li>• Reduce manual effort and human error</li>
                <li>• Reuse intelligence across multiple products</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">
                How ModelMatrix helps
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300 md:text-sm">
                <li>• Centralized model catalog</li>
                <li>• Filters by framework &amp; use case</li>
                <li>• Purchase and usage tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right side: small info card / stats */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-sm rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-[0_18px_50px_rgba(16,185,129,0.25)]">
            {/* glow circle */}
            <div className="pointer-events-none absolute -top-10 right-[-30px] h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Model overview
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-50">
              A structured view of your AI assets
            </h3>

            <p className="mt-2 text-sm text-slate-300">
              Each model entry in ModelMatrix AI contains:
            </p>

            <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
              <li>• Model name &amp; short description</li>
              <li>• Framework, use case and dataset</li>
              <li>• Creator email and created date</li>
              <li>• Purchase count for popularity insight</li>
            </ul>

            <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Example frameworks
                </p>
                <p>TensorFlow · PyTorch · Keras</p>
              </div>
              <div className="rounded-full bg-slate-900/70 px-3 py-2 text-right">
                <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                  Use cases
                </p>
                <p>NLP · Vision · Forecasting</p>
              </div>
            </div>

            <div className="mt-4 border-t border-slate-800 pt-3 text-[11px] text-slate-500">
              This is a{" "}
              <span className="font-semibold text-slate-300">
                static section
              </span>{" "}
              to explain what AI models are and how they are managed in your
              application, as required in the assignment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAiModels;
