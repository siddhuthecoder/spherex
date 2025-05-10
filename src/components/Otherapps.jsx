import { Zap, BookOpenCheck, CalendarDays, Globe } from "lucide-react";

export default function Integrations() {
  return (
    <>
      <section className="text-white py-16 px-4 mt-[-100px] ">
        <h2 className="text-4xl md:text-[56px] font-medium   text-center mb-16">
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent block font-jost py-16 leading-tight">
            Use Reflect <br /> with other apps
          </span>
        </h2>

        <div
          className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center text-center relative  bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/OTHERAPPS.png')" }}
        >
          <div className="space-y-2 p-[32px]">
            <div className="mx-auto w-fit p-2 bg-[#ff5722] rounded">
              <img src="zaiper.png" alt="zaiper" className="h-[30px]" />
            </div>
            <h3 className="text-lg font-semibold hidden xl:block">Zapier</h3>
            <p className="text-[16px] text-gray-300 hidden xl:block">
              Connect with Reflect with dozens of <br />
              applications without code
            </p>
          </div>

          <div className="space-y-2 p-[32px]">
            <div className="mx-auto w-fit p-2 bg-white rounded">
              <img src="readwise.png" alt="readwise" className="h-[30px]" />
            </div>
            <h3 className="text-lg font-semibold hidden xl:block">Readwise</h3>
            <p className="text-[16px] text-gray-300 hidden xl:block">
              Sync your reading highlights and <br /> notes with Reflect.
            </p>
          </div>

          <div className="space-y-2 p-6 sm:p-8">
  <div className="mx-auto w-fit flex gap-1 justify-center">
    <img
      src="google.png"
      alt="google_images"
      className="h-[48px] object-contain scale-[1.5]"
      />
  </div>
  <h3 className="text-lg font-semibold hidden xl:block">Google and Outlook</h3>
  <p className="text-[16px] text-gray-300 hidden xl:block">
    Integrate your contacts and calendars
  </p>
</div>


          <div className="space-y-2 p-[32px]">
            <div className="mx-auto w-fit flex gap-1 justify-center">
              <img
                src="chromesafari.png"
                alt="chromesafari"
                className="h-[48px] object-contain scale-[1.5]"
              />
            </div>
            <h3 className="text-lg font-semibold hidden xl:block">Chrome and Safari</h3>
            <p className="text-[16px] text-gray-300 hidden xl:block">
              Save web clips and sync with your Kindle
            </p>
          </div>

          {/* Center icon overlay with border animation */}
          <div class="integrations-lines">
            <div></div>
            <div></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform -translate(-50%,-50%) mt-5">
            <img src="WAVE1.png" alt="wave1" className="absolute wave1" />
            <img src="WAVE2.png" alt="wave2" className="absolute wave2" />
            <img src="WAVE3.png" alt="wave3" className="absolute wave3" />

            <div className="w-10 h-10 rounded-full  absolute">
              <img src="logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Inline Styles for Animations */}
      <style>
        {`
          @keyframes expandFromCenter {
            0% {
              transform: scale(0.7);
              border-radius: 50%;
              opacity: 1;
            }
            50% {
              background-color: #a855f7; /* Purple-500 */
              opacity: 0.2;
            }
            100% {
              transform: scale(2);
              background-color: #7e22ce; /* Darker purple */
              opacity: 0;
            }
          }

          .glow-expand-animation {
            animation: expandFromCenter 4s ease-in-out infinite;
          }
        `}
      </style>
    </>
  );
}
