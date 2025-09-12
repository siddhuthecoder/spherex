import React from "react";

// PopularCategoriesCard.jsx
// TailwindCSS-based React component that reproduces the UI shown in your screenshot.
// Usage: place <PopularCategories /> inside a page that has Tailwind configured.

export default function Popular() {
  const cards = [
    {
      title: "Business Templates",
      desc: "Professional website templates tailored for your business, agency, startup and more",
      cta: "Browse Category",
      icon: businessIcon(),
      ring: "from-blue-200 via-blue-100 to-purple-100",
      bg: "bg-gradient-to-br from-white/60 to-white/30",
    },
    {
      title: "SaaS Templates",
      desc: "Modern and sleek website templates for your SaaS, and Web App site",
      cta: "Browse Category",
      icon: saasIcon(),
      ring: "from-pink-200 via-purple-200 to-indigo-100",
      bg: "bg-gradient-to-br from-white/60 to-white/30",
    },
    {
      title: "Tailwind CSS Templates",
      desc: "Stylish and responsive website templates crafted using Tailwind CSS",
      cta: "Browse Category",
      icon: tailwindIcon(),
      ring: "from-green-200 via-emerald-200 to-lime-100",
      bg: "bg-gradient-to-br from-white/60 to-white/30",
    },
  ];

  return (
    <section className="w-full py-16">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(1000px 400px at 10% 10%, rgba(165,180,252,0.12), transparent), radial-gradient(900px 500px at 90% 80%, rgba(255,200,230,0.09), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Popular Categories</h2>
          <p className="mt-3 text-slate-500">Popular and Trending Template Categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {cards.map((card, i) => (
            <div key={i} className="relative">
              <div
                className={`rounded-2xl p-8 min-h-[240px] flex flex-col justify-start items-start ${card.bg} border border-white/40 shadow-xl backdrop-blur-sm`}
                style={{
                  boxShadow: "0 20px 40px rgba(15,23,42,0.06)",
                }}
              >
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">{card.desc}</p>
                <button className="text-sm font-medium text-slate-700 inline-flex items-center gap-2">
                  {card.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Overlapping circular icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div
                  className={`w-28 h-28 rounded-full p-3 border-4 border-white bg-gradient-to-br ${card.ring} shadow-lg flex items-center justify-center`}
                  style={{
                    filter: "drop-shadow(0 8px 20px rgba(100, 116, 139, 0.12))",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white/0 flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ---------------------- Icons ----------------------
function businessIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="12" rx="2" fill="url(#g)" />
      <path d="M7 8v3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 8v6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function saasIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="5" width="16" height="14" rx="3" fill="url(#g2)" />
      <rect x="8" y="9" width="8" height="6" rx="1" stroke="white" strokeWidth="1.2" />
      <defs>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0%" stopColor="#FDB6E6" />
          <stop offset="100%" stopColor="#C4B5FD" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function tailwindIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#g3)" />
      <path d="M7 14c2-3 5-3 7-1 2 2 4 2 4 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <defs>
        <linearGradient id="g3" x1="0" x2="1">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#C7F9C6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
