import React from "react";
import "./NeverLoose.css"
const NeverLoose = () => {
  return (
    <section className="research ">
      <div className="research-radar-wrapper">
        <div className="research-radar">
          <img
            height="1"
            width="1"
            alt=""
            src="/circlesLoose.png"
            className="lazy-image lazy-image-loaded research-radar-background"
          />
            <img
              height="1"
              width="1"
              alt=""
              src="/lock.png"
              className="lazy-image lazy-image-loaded research-radar-logo"
            />
          <div className="research-radar-scanner-wrapper research-radar-scanner-wrapper-visible">
            <div className="research-radar-scanner"></div>
            <div className="research-radar-items">
              
              {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                <div
                  key={index}
                  style={{ "--index": index }}
                  className={`research-radar-item ${
                    [1, 5, 6, 7].includes(index)
                      ? "research-radar-item-active"
                      : ""
                  }`}
                >
                  {[...Array(6)].map((_, i) => (
                    <div key={i} style={{ "--index": index + 5 - i }}></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="research-radar-fader"></div>
        </div>
      </div>
      <div className="section-header">
        <div className="section-header-badge">
          <div className="section-header-badge-text">Research and reading</div>
        </div>
        <h2 className="section-header-title section-header-title-h2">
          <div className="section-header-title-desktop ">
            <span>Never lose information</span>
          </div>
          {/* <div className="section-header-title-mobile ">
            <span>Never lose</span>
            <span>information</span>
          </div> */}
        </h2>
        <p className="section-header-description">
          Collect your web snippets, Kindle highlights and important links - all
          in one place. <br /> Then quickly find them again from any device.
        </p>
      </div>
      <div className="research-cards flex md:flex-row justify-center flex-col items-center">
        <div className="research-card relative animate-fade-in border-r border-r-[#ffffff3d] p-[24px_32px_36px] backdrop-blur-sm transition-all duration-300  cursor-pointer 
      hover:shadow-xl hover:bg-gradient-to-t from-[#030115] via-[#100D20] to-[#2C2A3D]
      before:content-[''] before:absolute before:w-[3px] before:h-[16px] before:right-[-2px] before:top-[80px] before:bg-[#ffffff3d]"
 >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13V8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5H32C32.7956 5 33.5587 5.31607 34.1213 5.87868C34.6839 6.44129 35 7.20435 35 8V26C35 26.7956 34.6839 27.5587 34.1213 28.1213C33.5587 28.6839 32.7956 29 32 29H21"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M5 8V13V25.25C5 27.3211 6.67893 29 8.75 29H32C32.7957 29 33.5587 28.6839 34.1213 28.1213C34.6839 27.5587 35 26.7957 35 26V8C35 7.20435 34.6839 6.44129 34.1213 5.87868C33.5587 5.31607 32.7957 5 32 5H8C7.20435 5 6.44129 5.31607 5.87868 5.87868C5.31607 6.44129 5 7.20435 5 8Z"
              fill="url(#paint0_linear_135_27270)"
              fillOpacity="0.24"
            ></path>
            <path
              d="M29 35H21M35 25H26"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M25 29L26 35"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3.75 19C3.75 18.4696 3.96071 17.9609 4.33579 17.5858C4.71086 17.2107 5.21957 17 5.75 17H13.75C14.2804 17 14.7891 17.2107 15.1642 17.5858C15.5393 17.9609 15.75 18.4696 15.75 19V33C15.75 33.5304 15.5393 34.0391 15.1642 34.4142C14.7891 34.7893 14.2804 35 13.75 35H5.75C5.21957 35 4.71086 34.7893 4.33579 34.4142C3.96071 34.0391 3.75 33.5304 3.75 33V19Z"
              fill="url(#paint1_linear_135_27270)"
              fillOpacity="0.24"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 31C9 30.4477 9.44475 30 9.99338 30H10.0066C10.5552 30 11 30.4477 11 31C11 31.5523 10.5552 32 10.0066 32H9.99338C9.44475 32 9 31.5523 9 31Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_135_27270"
                x1="35"
                y1="29.375"
                x2="12.5"
                y2="18.125"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_135_27270"
                x1="9.75"
                y1="17"
                x2="9.75"
                y2="35"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="1" stopColor="white"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="research-card-title">Integrated with your devices</div>
          <div className="research-card-description">
            We're everywhere, mobile or desktop, online <br /> or offline.
            Everything is synced in real-time.
          </div>
        </div>
        <div className="research-card">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 13L20 5L34 13V18.858C34 22.7831 32.5841 26.5764 30.0124 29.5417C27.4407 32.5069 23.8856 34.4449 20 35C16.1144 34.4449 12.5593 32.5069 9.98761 29.5417C7.41588 26.5764 6.00003 22.7831 6 18.858V13Z"
              fill="url(#paint0_linear_135_27281)"
              fillOpacity="0.24"
              stroke="white"
              strokeWidth="1.5"
            ></path>
            <path
              d="M23 19.3748V17C23 16.2044 22.6839 15.4413 22.1213 14.8787C21.5587 14.3161 20.7956 14 20 14C19.2044 14 18.4413 14.3161 17.8787 14.8787C17.3161 15.4413 17 16.2044 17 17V19.3748"
              stroke="white"
              strokeWidth="1.5"
            ></path>
            <path
              d="M15 24C15 24.7956 15.3161 25.5587 15.8787 26.1213C16.4413 26.6839 17.2044 27 18 27H22C22.7956 27 23.5587 26.6839 24.1213 26.1213C24.6839 25.5587 25 24.7956 25 24V20H15V24Z"
              fill="white"
              stroke="white"
              strokeWidth="1.5"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_135_27281"
                x1="20"
                y1="5"
                x2="20"
                y2="35"
                
                 gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="1" stopColor="white"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="research-card-title">Secure but open</div>
          <div className="research-card-description">
            End-to-end encryption keeps your notes secure.
Our export and API keeps your notes accessible.
          </div>
        </div>
      </div>
      <div class="research-section-lines"><div q:key="0"></div><div q:key="1"></div></div>
    </section>
  );
};

export default NeverLoose;
