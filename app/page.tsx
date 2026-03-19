"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1018] text-white font-sans">

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1018]/95 backdrop-blur border-b border-[#f5c518]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span
              className="text-[#f5c518] font-black text-lg tracking-widest uppercase glow-text"
            >
              Franklin&rsquo;s
            </span>
            <span className="text-white text-xs tracking-[0.3em] uppercase font-semibold">
              Earthmoving Inc.
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {["Services", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#f5c518] transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f5c518] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center bg-[#f5c518] text-[#0a1018] font-black text-sm uppercase tracking-wider px-5 py-2.5 hover:bg-[#e6b800] hover:shadow-[0_0_24px_rgba(245,197,24,0.4)] transition-all"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              Get a Free Estimate
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#f5c518] transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#f5c518] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#f5c518] transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 border-t border-[#f5c518]/20" : "max-h-0"
          }`}
        >
          <div className="bg-[#0a1018] px-4 py-6 flex flex-col gap-1">
            {["Services", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 font-semibold uppercase tracking-wider text-sm hover:text-[#f5c518] transition-colors py-3 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 bg-[#f5c518] text-[#0a1018] font-black text-sm uppercase tracking-wider px-5 py-3 text-center hover:bg-[#e6b800] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        {/* Scanlines */}
        <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />
        {/* Ambient glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#f5c518]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-[#f5c518]/4 rounded-full blur-[80px] pointer-events-none" />

        {/* Angular accent strips */}
        <div
          className="absolute -right-32 top-0 w-[520px] h-full bg-[#f5c518]/4 pointer-events-none"
          style={{ transform: "skewX(-7deg)" }}
          aria-hidden="true"
        />
        <div className="absolute right-16 bottom-0 w-px h-3/4 bg-gradient-to-t from-[#f5c518] via-[#f5c518]/60 to-transparent pointer-events-none" />
        <div className="absolute right-24 bottom-0 w-px h-1/2 bg-gradient-to-t from-[#f5c518]/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#f5c518]" />
            <p className="text-[#f5c518] font-black text-xs sm:text-sm tracking-[0.4em] uppercase">
              Albuquerque, New Mexico &mdash; Est. 1958
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight max-w-4xl mb-8">
            New Mexico&rsquo;s{" "}
            <span className="text-[#f5c518] glow-text">Trusted</span>{" "}
            Earthmoving Leader{" "}
            <span className="text-[#f5c518] glow-text">Since 1958</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-2xl mb-10 sm:mb-12 leading-relaxed">
            Over 65 years of heavy construction excellence — delivering
            Earthmoving, Utilities, Concrete, and Paving across Commercial,
            Industrial, Government, and Residential sectors statewide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#f5c518] text-[#0a1018] font-black text-sm sm:text-base uppercase tracking-wider px-8 py-4 hover:bg-[#e6b800] hover:shadow-[0_0_32px_rgba(245,197,24,0.45)] transition-all active:scale-[0.98]"
              style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
            >
              Get a Free Estimate
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wider px-8 py-4 hover:border-[#f5c518] hover:text-[#f5c518] hover:shadow-[0_0_20px_rgba(245,197,24,0.12)] transition-all"
            >
              Our Services
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-[#f5c518]/20 pt-10 sm:pt-12">
            {[
              { value: "65+", label: "Years in Business" },
              { value: "4", label: "Core Specialties" },
              { value: "NM", label: "Statewide Coverage" },
              { value: "1958", label: "Year Founded" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-[#f5c518] font-black text-3xl sm:text-4xl glow-text">{value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative bg-[#080d12] py-20 sm:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c518]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#f5c518]" />
              <p className="text-[#f5c518] text-xs sm:text-sm font-black tracking-[0.4em] uppercase">
                What We Do
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Our Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                icon: "🏗",
                title: "Earthmoving",
                desc: "Large-scale site grading, excavation, land clearing, and mass earthwork for any terrain New Mexico throws at us.",
              },
              {
                icon: "🔧",
                title: "Utilities",
                desc: "Underground utility installation including water, sewer, storm drainage, and dry utilities for municipalities and private clients.",
              },
              {
                icon: "🧱",
                title: "Concrete",
                desc: "Flatwork, curb and gutter, retaining walls, and structural concrete work built to last decades in the Southwest climate.",
              },
              {
                icon: "🛣",
                title: "Paving",
                desc: "Asphalt paving, parking lots, roadways, and surface rehabilitation for commercial properties and government agencies.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="relative bg-[#0f1923] border border-white/10 p-6 sm:p-8 hover:border-[#f5c518]/50 hover:bg-[#111d2b] hover:shadow-[0_0_24px_rgba(245,197,24,0.08)] transition-all group cursor-default"
                style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
              >
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-5">{icon}</div>
                <div className="w-8 h-0.5 bg-[#f5c518] mb-4 sm:mb-5 group-hover:w-14 transition-all duration-300" />
                <h3 className="text-lg sm:text-xl font-black mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#f5c518] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>

          {/* Client types */}
          <div className="mt-10 sm:mt-14 flex flex-wrap gap-2 sm:gap-3">
            {["Commercial", "Industrial", "Government", "Residential"].map((type) => (
              <span
                key={type}
                className="border border-[#f5c518]/40 text-[#f5c518] text-xs font-black uppercase tracking-widest px-4 sm:px-5 py-2 hover:bg-[#f5c518]/10 hover:border-[#f5c518]/70 transition-all"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c518]/50 to-transparent" />
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative py-20 sm:py-24">
        <div className="absolute inset-0 line-grid-bg pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#f5c518]" />
                <p className="text-[#f5c518] text-xs sm:text-sm font-black tracking-[0.4em] uppercase">
                  Who We Are
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 leading-tight">
                Built on Integrity,<br />Driven by Results
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                Franklin&rsquo;s Earthmoving Inc. has been a cornerstone of New Mexico&rsquo;s
                construction industry since 1958. For over 65 years, our crews have brought
                the same relentless work ethic and technical expertise to every job — from
                small residential grading projects to complex multi-million dollar commercial
                and government contracts.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                Safety is non-negotiable at Franklin&rsquo;s. We maintain rigorous jobsite
                standards, invest continuously in operator training, and use modern
                equipment to ensure every project is completed on time, on budget, and
                without incident. Our reputation has been earned one project at a time —
                and we intend to keep it that way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: "Safety First", sub: "Zero-compromise culture" },
                  { label: "Quality Work", sub: "Built to last" },
                  { label: "On Time", sub: "Dependable delivery" },
                ].map(({ label, sub }) => (
                  <div
                    key={label}
                    className="border-l-2 border-[#f5c518] pl-4 py-2 hover:bg-[#f5c518]/5 transition-colors"
                  >
                    <p className="font-black text-sm uppercase tracking-wide">{label}</p>
                    <p className="text-gray-400 text-xs mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — accent block */}
            <div className="relative mt-4 lg:mt-0">
              <div
                className="bg-[#080d12] p-8 sm:p-10 border border-white/10 hover:border-[#f5c518]/30 transition-colors glow-border-hover relative overflow-hidden"
                style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}
              >
                {/* Interior grid */}
                <div className="absolute inset-0 line-grid-bg opacity-30 pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[#f5c518] font-black text-7xl sm:text-8xl leading-none mb-4 glow-text">65+</p>
                  <p className="text-xl sm:text-2xl font-black mb-6">Years Serving New Mexico</p>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {[
                      "Licensed & bonded in the State of New Mexico",
                      "Serving Albuquerque and communities statewide",
                      "Experienced with municipal and DOT projects",
                      "Owner-operated since day one",
                      "Committed to community and local workforce",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[#f5c518] font-black mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Corner accent outside the clip */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#f5c518]/50 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="relative bg-[#080d12] py-20 sm:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c518]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#f5c518]" />
              <p className="text-[#f5c518] text-xs sm:text-sm font-black tracking-[0.4em] uppercase">
                Our Work
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Featured Projects</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Juan Tabo Hills",
                type: "Residential Development",
                tags: ["Earthmoving", "Grading", "Utilities"],
                desc: "Large-scale residential site preparation including mass grading, cut and fill operations, and underground utility installation across the Juan Tabo Hills development.",
                img: "/images/juan_tabo_hills.png",
              },
              {
                name: "Isleta Casino Parking Lot",
                type: "Commercial Paving",
                tags: ["Paving", "Concrete", "Curb & Gutter"],
                desc: "Full parking lot reconstruction for Isleta Casino Resort — asphalt paving, concrete curb and gutter, ADA compliance upgrades, and surface drainage improvements.",
                img: "/images/isleta.png",
              },
              {
                name: "Paseo Gateway",
                type: "Infrastructure",
                tags: ["Earthmoving", "Paving", "Utilities"],
                desc: "Gateway infrastructure project featuring roadway earthwork, asphalt paving, storm drainage system installation, and site finishing to municipal specifications.",
                img: "/images/paseo.png",
              },
            ].map(({ name, type, tags, desc, img }) => (
              <div
                key={name}
                className="bg-[#0f1923] border border-white/10 overflow-hidden hover:border-[#f5c518]/50 hover:shadow-[0_0_24px_rgba(245,197,24,0.08)] transition-all group"
              >
                {/* Project image */}
                <div className="h-44 sm:h-48 border-b border-white/10 relative overflow-hidden">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0f1923]/30 group-hover:bg-[#0f1923]/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f5c518] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </div>

                <div className="p-5 sm:p-7">
                  <p className="text-[#f5c518] text-xs font-black uppercase tracking-widest mb-2">{type}</p>
                  <h3 className="text-lg sm:text-xl font-black mb-3">{name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#f5c518]/10 text-[#f5c518] text-xs font-bold px-3 py-1 border border-[#f5c518]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c518]/50 to-transparent" />
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative py-20 sm:py-24">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Left — CTA */}
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#f5c518]" />
                <p className="text-[#f5c518] text-xs sm:text-sm font-black tracking-[0.4em] uppercase">
                  Let&rsquo;s Talk
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
                Ready to Start<br />Your Project?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                Get in touch for a free estimate. Our team will review your project
                requirements and respond promptly. We&rsquo;ve been doing this since
                1958 — we know how to get the job done right.
              </p>

              {/* Contact info */}
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f5c518]/10 border border-[#f5c518]/20 p-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#f5c518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-wide mb-1">Address</p>
                    <p className="text-gray-400 text-sm">700 Industrial Ave. NE<br />Albuquerque, NM 87107</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f5c518]/10 border border-[#f5c518]/20 p-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#f5c518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-wide mb-1">Phone</p>
                    <a href="tel:5058846947" className="text-gray-400 text-sm hover:text-[#f5c518] transition-colors">
                      (505) 884-6947
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f5c518]/10 border border-[#f5c518]/20 p-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#f5c518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-wide mb-1">Email</p>
                    <a
                      href="mailto:estimates@franklinsearthmoving.com"
                      className="text-gray-400 text-sm hover:text-[#f5c518] transition-colors break-all"
                    >
                      estimates@franklinsearthmoving.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div
              className="relative bg-[#080d12] border border-white/10 p-6 sm:p-8 overflow-hidden"
              style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}
            >
              {/* Interior grid */}
              <div className="absolute inset-0 line-grid-bg opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-black mb-6">Request a Free Estimate</h3>
                <form className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#0a1018] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#0a1018] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#0a1018] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-[#0a1018] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors"
                      placeholder="(505) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                      Project Type
                    </label>
                    <select className="w-full bg-[#0a1018] border border-white/10 px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-[#f5c518] transition-colors">
                      <option value="">Select a service...</option>
                      <option>Earthmoving</option>
                      <option>Utilities</option>
                      <option>Concrete</option>
                      <option>Paving</option>
                      <option>Multiple / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-[#0a1018] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors resize-none"
                      placeholder="Describe your project, location, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f5c518] text-[#0a1018] font-black text-sm uppercase tracking-wider py-4 hover:bg-[#e6b800] hover:shadow-[0_0_32px_rgba(245,197,24,0.4)] transition-all active:scale-[0.98]"
                  >
                    Send Estimate Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative bg-[#050a0f] border-t border-[#f5c518]/20 py-8 sm:py-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c518]/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[#f5c518] font-black text-base tracking-widest uppercase">
              Franklin&rsquo;s Earthmoving Inc.
            </span>
            <span className="text-gray-600 text-xs mt-1">feinm.com &bull; Albuquerque, NM</span>
          </div>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Franklin&rsquo;s Earthmoving Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-gray-600">
            {["Services", "About", "Projects", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#f5c518] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
