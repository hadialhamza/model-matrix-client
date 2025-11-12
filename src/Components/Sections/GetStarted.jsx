// src/components/home/GetStartedSection.jsx
import React from "react";
import { Link } from "react-router";

const GetStarted = () => {
  return (
    <section className="bg-slate-950 py-12 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
          {/* Left side: text + buttons */}
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Static Section 2 · Get Started
            </span>

            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Get Started with ModelMatrix AI
            </h2>

            <p className="text-sm text-slate-300 md:text-base">
              Create an account or log in to start adding, exploring and
              purchasing AI models. Once you&apos;re signed in, you can manage
              your own models and track everything from a single dashboard.
            </p>

            <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
              <li>• Add new AI models with framework, use case and dataset.</li>
              <li>• Browse all available models and view detailed info.</li>
              <li>
                • Purchase models and see them in your personal purchases list.
              </li>
            </ul>

            {/* CTA buttons */}
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-emerald-500/40"
              >
                Create an account
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-slate-100 backdrop-blur-sm transition-all duration-200 hover:border-emerald-300/60 hover:bg-slate-900/80"
              >
                Log in instead
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              No credit card required. Just sign in and start managing your AI
              models in minutes.
            </p>
          </div>

          {/* Right side: minimal steps / visual card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.7)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              3 simple steps
            </p>

            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-300">
                  1
                </div>
                <div>
                  <p className="font-semibold text-slate-50">
                    Register or log in
                  </p>
                  <p className="text-xs text-slate-400">
                    Use your email to create an account or access your existing
                    workspace.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-300">
                  2
                </div>
                <div>
                  <p className="font-semibold text-slate-50">
                    Add or explore models
                  </p>
                  <p className="text-xs text-slate-400">
                    Publish your own AI models or browse existing ones by
                    framework and use case.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-300">
                  3
                </div>
                <div>
                  <p className="font-semibold text-slate-50">
                    Purchase & manage usage
                  </p>
                  <p className="text-xs text-slate-400">
                    Purchase models, track popularity and see them in your
                    &quot;My Purchases&quot; page.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-slate-900/70 px-4 py-3 text-xs text-slate-200">
              <span className="font-semibold text-emerald-300">Reminder: </span>
              This section is static and exists to guide users to
              registration/login as required in the assignment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
