export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1923] text-white font-sans">
      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1923]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="text-[#f5c518] font-black text-lg tracking-widest uppercase">
              Franklin&rsquo;s
            </span>
            <span className="text-white text-xs tracking-[0.3em] uppercase font-semibold">
              Earthmoving Inc.
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-[#f5c518] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#f5c518] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#f5c518] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#f5c518] transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="bg-[#f5c518] text-[#0f1923] font-black text-sm uppercase tracking-wider px-5 py-2.5 rounded hover:bg-[#e6b800] transition-colors"
          >
            Get a Free Estimate
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Diagonal accent strip */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -right-40 top-0 w-[600px] h-full bg-[#f5c518]/5 skew-x-[-8deg]" />
          <div className="absolute right-20 bottom-0 w-2 h-3/4 bg-[#f5c518]" />
          <div className="absolute right-28 bottom-0 w-1 h-1/2 bg-[#f5c518]/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          <p className="text-[#f5c518] font-black text-sm tracking-[0.4em] uppercase mb-6">
            Albuquerque, New Mexico &mdash; Est. 1958
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight max-w-4xl mb-8">
            New Mexico&rsquo;s{" "}
            <span className="text-[#f5c518]">Trusted</span>{" "}
            Earthmoving Leader{" "}
            <span className="text-[#f5c518]">Since 1958</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
            Over 65 years of heavy construction excellence — delivering
            Earthmoving, Utilities, Concrete, and Paving across Commercial,
            Industrial, Government, and Residential sectors statewide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#f5c518] text-[#0f1923] font-black text-base uppercase tracking-wider px-8 py-4 rounded hover:bg-[#e6b800] transition-colors"
            >
              Get a Free Estimate
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border-2 border-white/20 text-white font-bold text-base uppercase tracking-wider px-8 py-4 rounded hover:border-[#f5c518] hover:text-[#f5c518] transition-colors"
            >
              Our Services
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
            {[
              { value: "65+", label: "Years in Business" },
              { value: "4", label: "Core Specialties" },
              { value: "NM", label: "Statewide Coverage" },
              { value: "1958", label: "Year Founded" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-[#f5c518] font-black text-4xl">{value}</p>
                <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-[#131e2b] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#f5c518] text-sm font-black tracking-[0.4em] uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-black">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="bg-[#0f1923] border border-white/10 rounded-lg p-8 hover:border-[#f5c518]/50 hover:bg-[#162030] transition-all group"
              >
                <div className="text-4xl mb-5">{icon}</div>
                <div className="w-10 h-1 bg-[#f5c518] mb-5 group-hover:w-16 transition-all" />
                <h3 className="text-xl font-black mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Client types */}
          <div className="mt-14 flex flex-wrap gap-3">
            {["Commercial", "Industrial", "Government", "Residential"].map((type) => (
              <span
                key={type}
                className="border border-[#f5c518]/40 text-[#f5c518] text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <p className="text-[#f5c518] text-sm font-black tracking-[0.4em] uppercase mb-3">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Built on Integrity,<br />Driven by Results
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Franklin&rsquo;s Earthmoving Inc. has been a cornerstone of New Mexico&rsquo;s
                construction industry since 1958. For over 65 years, our crews have brought
                the same relentless work ethic and technical expertise to every job — from
                small residential grading projects to complex multi-million dollar commercial
                and government contracts.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Safety is non-negotiable at Franklin&rsquo;s. We maintain rigorous jobsite
                standards, invest continuously in operator training, and use modern
                equipment to ensure every project is completed on time, on budget, and
                without incident. Our reputation has been earned one project at a time —
                and we intend to keep it that way.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Safety First", sub: "Zero-compromise culture" },
                  { label: "Quality Work", sub: "Built to last" },
                  { label: "On Time", sub: "Dependable delivery" },
                ].map(({ label, sub }) => (
                  <div key={label} className="border-l-2 border-[#f5c518] pl-4">
                    <p className="font-black text-sm uppercase tracking-wide">{label}</p>
                    <p className="text-gray-400 text-xs mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — accent block */}
            <div className="relative">
              <div className="bg-[#131e2b] rounded-lg p-10 border border-white/10">
                <p className="text-[#f5c518] font-black text-8xl leading-none mb-4">65+</p>
                <p className="text-2xl font-black mb-6">Years Serving New Mexico</p>
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
              {/* Decorative corner accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-4 border-r-4 border-[#f5c518] rounded-br-lg pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="bg-[#131e2b] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#f5c518] text-sm font-black tracking-[0.4em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Juan Tabo Hills",
                type: "Residential Development",
                tags: ["Earthmoving", "Grading", "Utilities"],
                desc: "Large-scale residential site preparation including mass grading, cut and fill operations, and underground utility installation across the Juan Tabo Hills development.",
              },
              {
                name: "Isleta Casino Parking Lot",
                type: "Commercial Paving",
                tags: ["Paving", "Concrete", "Curb & Gutter"],
                desc: "Full parking lot reconstruction for Isleta Casino Resort — asphalt paving, concrete curb and gutter, ADA compliance upgrades, and surface drainage improvements.",
              },
              {
                name: "Paseo Gateway",
                type: "Infrastructure",
                tags: ["Earthmoving", "Paving", "Utilities"],
                desc: "Gateway infrastructure project featuring roadway earthwork, asphalt paving, storm drainage system installation, and site finishing to municipal specifications.",
              },
            ].map(({ name, type, tags, desc }) => (
              <div
                key={name}
                className="bg-[#0f1923] border border-white/10 rounded-lg overflow-hidden hover:border-[#f5c518]/50 transition-all group"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-[#1a2d40] to-[#0f1923] flex items-center justify-center border-b border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#f5c518]/5 group-hover:bg-[#f5c518]/10 transition-colors" />
                  <div className="text-center z-10">
                    <p className="text-[#f5c518]/40 text-5xl font-black">FE</p>
                    <p className="text-gray-600 text-xs uppercase tracking-widest mt-1">Project Photo</p>
                  </div>
                  {/* Yellow accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f5c518] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>

                <div className="p-7">
                  <p className="text-[#f5c518] text-xs font-black uppercase tracking-widest mb-2">
                    {type}
                  </p>
                  <h3 className="text-xl font-black mb-3">{name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#f5c518]/10 text-[#f5c518] text-xs font-bold px-3 py-1 rounded-full"
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
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — CTA */}
            <div>
              <p className="text-[#f5c518] text-sm font-black tracking-[0.4em] uppercase mb-3">
                Let&rsquo;s Talk
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Ready to Start<br />Your Project?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Get in touch for a free estimate. Our team will review your project
                requirements and respond promptly. We&rsquo;ve been doing this since
                1958 — we know how to get the job done right.
              </p>

              {/* Contact info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f5c518]/10 rounded p-3 flex-shrink-0">
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
                  <div className="bg-[#f5c518]/10 rounded p-3 flex-shrink-0">
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
                  <div className="bg-[#f5c518]/10 rounded p-3 flex-shrink-0">
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
            <div className="bg-[#131e2b] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-black mb-6">Request a Free Estimate</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#0f1923] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#0f1923] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors"
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
                    className="w-full bg-[#0f1923] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-[#0f1923] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors"
                    placeholder="(505) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                    Project Type
                  </label>
                  <select className="w-full bg-[#0f1923] border border-white/10 rounded px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-[#f5c518] transition-colors">
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
                    className="w-full bg-[#0f1923] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f5c518] transition-colors resize-none"
                    placeholder="Describe your project, location, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f5c518] text-[#0f1923] font-black text-sm uppercase tracking-wider py-4 rounded hover:bg-[#e6b800] transition-colors"
                >
                  Send Estimate Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#080e14] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[#f5c518] font-black text-base tracking-widest uppercase">
              Franklin&rsquo;s Earthmoving Inc.
            </span>
            <span className="text-gray-600 text-xs mt-1">feinm.com &bull; Albuquerque, NM</span>
          </div>
          <p className="text-gray-600 text-xs text-center">
            &copy; {new Date().getFullYear()} Franklin&rsquo;s Earthmoving Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#services" className="hover:text-[#f5c518] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#f5c518] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#f5c518] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#f5c518] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
