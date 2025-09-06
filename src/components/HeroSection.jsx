import { useEffect, useRef, useState } from "react";
import {
  DollarSign,
  Gem,
  TrendingUp,
  Users,
  Star,
  Shield,
  Globe,
  Zap,
  ArrowRight,
  Sparkles,
  Bitcoin,
  Coins,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Link } from "react-router-dom";
// import "./star.css";
// import wallet from "../../assets/wallet.png";
// import getStart from "../../assets/getStart.png";
// import accept from "../../assets/accept.png";
// import bid from "../../assets/bid.png";
// import cancel from "../../assets/cancel.png";
// import complete from "../../assets/complete.png";
// import createProposal from "../../assets/createProposal.png";
// import deposit from "../../assets/deposit.png";
// import firstPay from "../../assets/firstPay.png";
// import finalPay from "../../assets/finalPay.png";
// import initialiseProposal from "../../assets/initialiseProposal.png";
// import openBid from "../../assets/openBid.png";
// import secondPay from "../../assets/secondPay.png";
// import start from "../../assets/start.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const touchStartXRef = useRef(null);
  const slideStartRef = useRef(null);
  const rafIdRef = useRef(null);
  const slideDuration = 4000; // 4 seconds per slide

  const typewriterWords = ["Trusted", "Innovative", "Secure", "Transparent"];

  //   const slideshowData = [
  //     {
  //       id: 1,
  //       title: "Authentication",
  //       description:
  //         "Securely connect your Web3 wallet to log in and verify your identity.",
  //       image: wallet,
  //       features: ["Wallet Connection", "Authentication"],
  //     },

  //     {
  //       id: 2,
  //       title: "Getting Started",
  //       description:
  //         "Begin your journey on our secure and decentralized freelancing platform.",
  //       image: getStart,
  //       features: ["Dapp", "Get Started"],
  //     },

  //     {
  //       id: 3,
  //       title: "Create Proposal",
  //       description:
  //         "Post a proposal on-chain and set up secure payments for your project.",
  //       image: createProposal,
  //       features: ["Freelancing", "Create Work"],
  //     },

  //     {
  //       id: 4,
  //       title: "Initialize Proposal",
  //       description:
  //         "Save your proposal directly on the blockchain through smart contracts.",
  //       image: initialiseProposal,
  //       features: ["Blockchain", "Base Network"],
  //     },

  //     {
  //       id: 5,
  //       title: "Open Proposal for Bids",
  //       description:
  //         "Open your proposal for freelancers to bid, ensuring competitive pricing and efficiency.",
  //       image: openBid,
  //       features: ["Open Bid", "Base Network"],
  //     },

  //     {
  //       id: 6,
  //       title: "Bid on Proposal",
  //       description:
  //         "Freelancers can bid on proposals by spending 25 HFT tokens.",
  //       image: bid,
  //       features: ["Make Bid", "Get Work"],
  //     },

  //     {
  //       id: 7,
  //       title: "Accept a Bid",
  //       description:
  //         "Choose the most suitable freelancer to work on your proposal.",
  //       image: accept,
  //       features: ["Select Bidder", "Pay for Work"],
  //     },

  //     {
  //       id: 8,
  //       title: "Deposit Funds",
  //       description:
  //         "Securely lock project funds in the smart contract for safe payments.",
  //       image: deposit,
  //       features: ["Lock Funds", "Pay Freelancers"],
  //     },

  //     {
  //       id: 9,
  //       title: "Start Work",
  //       description:
  //         "Freelancers can start working once funds are deposited, ensuring guaranteed payments.",
  //       image: start,
  //       features: ["Freelancing", "Start Work"],
  //     },

  //     {
  //       id: 10,
  //       title: "First Payment",
  //       description:
  //         "Release 40% of the payment once the first milestone is completed.",
  //       image: firstPay,
  //       features: ["Milestone Payment"],
  //     },

  //     {
  //       id: 11,
  //       title: "Second Payment",
  //       description:
  //         "Release 30% of the payment after the second milestone is achieved.",
  //       image: secondPay,
  //       features: ["Milestone Payment"],
  //     },

  //     {
  //       id: 12,
  //       title: "Final Payment",
  //       description:
  //         "Release the remaining 30% once the final milestone is delivered.",
  //       image: finalPay,
  //       features: ["Milestone Payment"],
  //     },

  //     {
  //       id: 13,
  //       title: "Complete Work",
  //       description:
  //         "Close the proposal once all work is delivered and payments are made.",
  //       image: complete,
  //       features: ["Finish"],
  //     },

  //     {
  //       id: 14,
  //       title: "Cancel Proposal",
  //       description:
  //         "Cancel a proposal anytime. The client receives a refund of unused funds instantly.",
  //       image: cancel,
  //       features: ["Cancel"],
  //     },
  //   ];

  // Auto-advance slideshow and progress bar
  //   useEffect(() => {
  //     if (!showSlideshow || !isPlaying) return;

  //     const tick = (timestamp) => {
  //       if (!slideStartRef.current) slideStartRef.current = timestamp;
  //       const elapsed = timestamp - slideStartRef.current;
  //       const ratio = Math.min(1, elapsed / slideDuration);
  //       setProgress(ratio);

  //       if (ratio >= 1) {
  //         slideStartRef.current = timestamp;
  //         setProgress(0);
  //         setCurrentSlide((prev) => (prev + 1) % slideshowData.length);
  //       }

  //       if (isPlaying) {
  //         rafIdRef.current = requestAnimationFrame(tick);
  //       }
  //     };

  //     rafIdRef.current = requestAnimationFrame(tick);

  //     return () => {
  //       if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
  //     };
  //   }, [showSlideshow, isPlaying, slideshowData.length]);

  // Typewriter effect
  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      setTypewriterIndex((prev) => (prev + 1) % typewriterWords.length);
    }, 2000);

    return () => clearInterval(typewriterInterval);
  }, []);

  useEffect(() => {
    const currentWord = typewriterWords[typewriterIndex];
    let charIndex = 0;

    const charInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setTypewriterText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(charInterval);
      }
    }, 100);

    return () => clearInterval(charInterval);
  }, [typewriterIndex]);

  useEffect(() => {
    setIsVisible(true);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="min-h-[100vh] u-display-s bg-[#f0eee6] flex items-center justify-center px-3 sm:px-4 pt-16 sm:pt-20 relative overflow-hidden">
        {/* Professional Grid Background */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 2px, transparent 2px)
            `,
              backgroundSize: "120px 120px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto my-20 relative z-10 w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 sm:px-8 sm:py-4 border border-black/20 text-black/80 rounded-full text-xs sm:text-sm font-medium bg-white/80 backdrop-blur-sm hover:border-black/30 hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/10">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black/70" />
              Innovating Beyond Boundaries{" "}
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black/70" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-black font-orbitron drop-shadow-2xl">
                {typewriterText}
                <span className="animate-pulse text-black/60">|</span>
              </span>
              <br />
              <span className="text-black font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl drop-shadow-2xl">
                SphereX
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 mb-8 sm:mb-10 leading-relaxed max-w-3xl sm:max-w-4xl mx-auto px-2 sm:px-4">
              Collaborate seamlessly and get rewarded instantly with secure blockchain technology. No middlemen, no delays—just pure SphereX-powered innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 justify-center">
              <button className="group flex items-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-black hover:bg-gray-800 text-white font-semibold md:font-bold text-base md:text-lg rounded-xl md:rounded-2xl shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:shadow-3xl border border-black/20">
                Get Started Now
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <Link
                to="/contact"
                className="group flex items-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 border-2 border-black/30 text-black hover:border-black/50 hover:text-black font-semibold md:font-bold text-base md:text-lg rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:bg-white/80 shadow-lg shadow-black/10 bg-white/60"
              >
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
