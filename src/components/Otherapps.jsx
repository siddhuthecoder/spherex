// src/components/Integrations.jsx
import { Zap, BookOpenCheck, CalendarDays, Globe } from "lucide-react";

export default function Integrations() {
  return (
    <>
      
        <section className="bg-[#0e0e2c] text-white py-16 px-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
            Use Reflect with other apps
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto items-center text-center relative">
            <div className="space-y-2">
              <div className="mx-auto w-fit p-2 bg-[#ff5722] rounded">
                <Zap className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Zapier</h3>
              <p className="text-sm text-gray-300">
                Connect with Reflect with dozens of applications without code
              </p>
            </div>

            <div className="space-y-2">
              <div className="mx-auto w-fit p-2 bg-white rounded">
                <BookOpenCheck className="text-black" />
              </div>
              <h3 className="text-lg font-semibold">Readwise</h3>
              <p className="text-sm text-gray-300">
                Sync your reading highlights and notes with Reflect.
              </p>
            </div>

            <div className="space-y-2">
              <div className="mx-auto w-fit flex gap-1 justify-center">
                <img
                  src="https://logos-world.net/wp-content/uploads/2021/03/Google-Calendar-Logo.png"
                  alt="Google Calendar"
                  className="w-12"
                />
                <img
                  src="https://clipartcraft.com/images/outlook-logo-new-4.png"
                  alt="Outlook"
                  className="w-6"
                />
              </div>
              <h3 className="text-lg font-semibold">Google and Outlook</h3>
              <p className="text-sm text-gray-300">
                Integrate your contacts and calendars
              </p>
            </div>

            <div className="space-y-2">
              <div className="mx-auto w-fit flex gap-1 justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
                  alt="Chrome"
                  className="w-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/512px-Safari_browser_logo.svg.png"
                  alt="Safari"
                  className="w-6"
                />
              </div>
              <h3 className="text-lg font-semibold">Chrome and Safari</h3>
              <p className="text-sm text-gray-300">
                Save web clips and sync with your Kindle
              </p>
            </div>

            {/* Center icon overlay with border animation */}
            
           
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                
              <div className="border border-purple-900 p-8 rounded-full shadow-2xl scale-75 md:scale-100 absolute w-24 h-24  glow-expand-animation"></div>
                <div className="border border-purple-900 rounded-full w-16 h-16 flex items-center justify-center relative glow-expand-animation"></div>
                
                 
                 
                  <div className="w-10 h-10 rounded-full  absolute"><img src="logo.png" alt="" /></div>
                 
               
             
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
              transform: scale(4);
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
