// src/components/IntegrationsHero.jsx
import React from "react";

/**
 * IntegrationsHero.jsx
 * - Pure React + TailwindCSS
 * - Continuous right -> left marquee of tech-stack icons
 *
 * Notes:
 * - Replace the image URLs in `icons` if you prefer different assets.
 * - Tailwind must be configured in your project for styling to work.
 */

const icons = [
  // Web development
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  // Mobile / App development
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
  // Artificial Intelligence / Python
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  // SaaS / cloud (Docker to represent cloud/containers / saas infra)
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  // UI/UX (Figma)
  // Blockchain (Ethereum)
    // 🌐 Web Development
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  
    // 📱 App Development
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
  
    // 🤖 Artificial Intelligence / ML
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
  
    // ☁️ SaaS / Cloud
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
  
    // 🎨 UI/UX Design
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg",
    "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
  
    // 🔗 Blockchain
    "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    "https://cryptologos.cc/logos/solana-sol-logo.svg",
    "https://cryptologos.cc/logos/polygon-matic-logo.svg",
  
];

export default function IntegrationsHero() {
  // Duplicate icons for seamless loop
  const marqueeItems = [...icons, ...icons];

  return (
    <section className="w-full py-12 px-6 u-display-s bg-[#f3f4f6] ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center ">
        {/* LEFT: Text */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
            Fully integrated
            <br />
            with your stack
          </h1>
          <p className="mt-6 text-black/70 max-w-xl text-xl">
            Script, share, and analyze your demos at superspeed with powerful integrations.
          </p>
          <a
            href="#"
            className="inline-block mt-6 text-black font-semibold underline decoration-black/40 hover:decoration-black/60 transition-colors"
          >
            Read more
          </a>
        </div>

        {/* RIGHT: Panel with rounded corner and marquee */}
        <div className="w-full lg:w-3/5">
          <div className="relative">
            {/* White rounded panel with slanted left edge */}
            <div
              className="overflow-hidden rounded-2xl bg-[#cec6b9] border border-black/10 shadow-lg mt-[20px] md:mt-0 p-[28px_20px] 
             md:[clip-path:polygon(21%_1%,100%_0%,100%_100%,0%_100%)]"
              
            >
              {/* Marquee viewport */}
              <div className="relative w-full h-64">
                {/* The moving track - duplicated content for seamless loop */}
                <div className="marquee-track will-change-transform">
                  <div className="marquee flex items-center space-x-6">
                    {marqueeItems.map((src, idx) => (
                      <div
                        key={idx + "-" + src}
                        className="flex-shrink-0 w-32 h-32 bg-white rounded-xl shadow-[0_6px_0_rgba(0,0,0,0.1)] border border-black/5 flex items-center justify-center p-3"
                      >
                        <img
                          src={src}
                          alt="stack"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* vertical scrollbar look (optional) - matches screenshot */}
            <div className="absolute right-2 top-0 bottom-0 flex items-center">
              <div className="w-1.5 h-20 bg-gray-300 rounded-full opacity-90"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for marquee animation (no Tailwind plugin required) */}
      <style>{`
        /* marquee container hides overflow */
        .marquee-track { 
          position: relative; 
          width: 100%; 
          height: 100%; 
          overflow: hidden;
        }

        /* the inner flex row which will be animated */
        .marquee {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          /* width set large enough because we duplicated items */
          white-space: nowrap;
          animation: marquee-left 18s linear infinite;
        }

        /* Responsive tweak: speed up on small screens */
        @media (max-width: 640px) {
          .marquee {
            animation: marquee-left 12s linear infinite;
          }
        }

        /* marquee animation: from 0 to -50% (since we duplicated content) */
        @keyframes marquee-left {
          0% { transform: translateX(0) translateY(-50%); }
          100% { transform: translateX(-50%) translateY(-50%); }
        }

        /* Slight shadow mimic like the screenshot shadow below the cards */
        .shadow-[0_6px_0_rgba(0,0,0,0.1)] {
          box-shadow: 0 6px 0 rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
}
