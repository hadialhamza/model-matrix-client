import React from "react";
import { Link } from "react-router";

const GetStarted = () => {
  return (
    <section className="section-container mb-20">
      <div className="bg-base-100 shadow-[0_1px_15px_rgba(0,0,0,0.15)] p-5 md:p-6 lg:p-8 rounded-2xl">
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-4 lg:flex-row lg:items-end md:justify-between">
          <div className="lg:w-2/3">
            <span className="small-title">- Get Started -</span>
            <h2 className="section-title">
              Get Started with{" "}
              <span className="text-emerald-600">ModelMatrix AI</span>
            </h2>
            <p className="section-subtitle">
              Create an account or log in to begin adding, exploring and
              purchasing AI models. Your dashboard keeps everything
              organized—frameworks, datasets, use cases, and history.
            </p>
          </div>
          <div className="mt-2 flex gap-3 md:mt-0">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              Create an account
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Log in
            </Link>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Centralized Catalog
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              All models, one place
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Store model name, framework, use case, dataset, description,
              creator, and created date. Search and filter without hunting
              across repos.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              <li>• Framework &amp; use-case filters</li>
              <li>• Consistent metadata</li>
              <li>• Faster discovery</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Team-ready
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              Share &amp; reuse safely
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Track ownership and popularity via purchases. Know what’s proven
              before adopting it in production.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              <li>• “My Models” &amp; “My Purchases” pages</li>
              <li>• Purchase counts for trust</li>
              <li>• Clear creator attribution</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Simple &amp; Practical
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              Built for assignments
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clean UI, straightforward APIs, Firebase auth, and
              MongoDB—everything required for your coursework.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              <li>• Register / Login flow</li>
              <li>• Add / Browse / Purchase models</li>
              <li>• Recent models on homepage</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            3 Simple Steps
          </p>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
                1
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Register or log in
                </p>
                <p className="text-sm text-slate-600">
                  Create your account or access your workspace using email auth
                  (Firebase).
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
                2
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Add or explore models
                </p>
                <p className="text-sm text-slate-600">
                  Publish your own models or browse existing ones by framework,
                  dataset, and use case.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
                3
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Purchase &amp; manage
                </p>
                <p className="text-sm text-slate-600">
                  Purchase models you like and track them under “My
                  Purchases”—popularity increases automatically.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              No credit card required
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              Educational project friendly
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              Clean, minimal UI
            </span>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold text-slate-900">
                Do I need an account to browse models?
              </span>
              <span className="ml-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600 transition group-open:bg-emerald-50 group-open:text-emerald-700 group-open:border-emerald-200">
                Toggle
              </span>
            </summary>
            <p className="mt-3 text-sm text-slate-600">
              You can view public lists, but you’ll need to register/login to
              add models or purchase them, and to access “My Models” &amp; “My
              Purchases”.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold text-slate-900">
                What information is required to add a model?
              </span>
              <span className="ml-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600 transition group-open:bg-emerald-50 group-open:text-emerald-700 group-open:border-emerald-200">
                Toggle
              </span>
            </summary>
            <p className="mt-3 text-sm text-slate-600">
              Name, framework, use case, dataset, a short description, preview
              image URL, and your email. The created date is stored
              automatically.
            </p>
          </details>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-emerald-50 px-6 py-6 shadow-sm lg:flex-row lg:items-center">
          <div>
            <p className="text-lg font-semibold text-emerald-900">
              Ready to manage your AI models the clean way?
            </p>
            <p className="text-sm text-emerald-800">
              Register or log in to start adding, exploring and purchasing
              models in minutes.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              Create an account
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
