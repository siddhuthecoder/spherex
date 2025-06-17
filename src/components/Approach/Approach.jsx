
import React from 'react';
import { FaUsers, FaBullseye, FaLayerGroup, FaCheckCircle, FaHeadset, FaClipboardCheck } from "react-icons/fa";
const features = [
  { icon:<FaUsers size={24}/> , title: "Open and Honest Dialogue", desc: "We build lasting partnerships through transparent communication. No hidden agendas—just clear, straightforward discussions about our needs and your capabilities" },
  { icon: <FaBullseye size={24} />, title: "Strategic Vision", desc: "Before writing any code, we analyze your workflow, users, and market position. This foundation helps us create solutions that truly serve your business needs." },
  { icon: <FaLayerGroup  size={24} />, title: "Active Management", desc: "Our leadership team stays involved throughout your project. From kickoff to delivery, you’ll have direct access to decision-makers who guide your project’s success" },
  { icon: <FaCheckCircle size={24} />, title: "Simplicity First", desc: "Complex technology doesn’t mean complicated processes. We keep communication clear, documentation accessible, and progress transparent." },
  { icon: <FaHeadset size={24} />, title: "Post-launch Support", desc: "We stay with you after your project goes live. We provide training, maintenance, and quick responses when you need help or want to make changes." },
  { icon: <FaClipboardCheck size={24} />, title: "Deep Testing", desc: "Users get a smooth experience from day one. We test on real devices to catch problems before launch, so there won’t be any 'surprises' waiting for you." },
  
];

export default function Approach() {
  return (
    <div className='min-h-screen px-[10px] md:px-[100px] py-[50px] relative  font-jost z-10'>
      <h3 className='text-center text-[40px] md:text-[56px]  font-medium  my-[50px] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent block font-jost'>Our Approach</h3>
      
  <div className="relative group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]
  after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:pointer-events-none 
  after:duration-500 after:ease-[cubic-bezier(0.3,0.8,0,1)] 
  after:bg-gradient-to-t after:from-[rgba(255,255,255,0)] after:to-[rgba(124,95,95,0.2)]

    before:content-[''] before:absolute before:bottom-1/2 before:left-0 before:w-full before:h-[1px] before:pointer-events-none 
    before:duration-500 before:ease-[cubic-bezier(0.3,0.8,0,1)] 
    before:bg-gradient-to-r before:from-[rgba(255,255,255,0)] before:via-[rgba(255,255,255,0.2)] before:to-[rgba(255,255,255,0)]"
>

  {features.slice(0,4).map((feature, index) => (
    <div
    key={index}
    className="relative animate-fade-in border-l border-l-[#ffffff3d] p-[24px_32px_36px] backdrop-blur-sm transition-all duration-300  cursor-pointer 
      hover:shadow-xl hover:bg-gradient-to-b from-[#030115] via-[#100D20] to-[#2C2A3D]
      before:content-[''] before:absolute before:w-[3px] before:h-[16px] before:left-[-2px] before:top-[80px] before:bg-[#ffffff3d]"
  >
      <div className="mb-4 text-purple-400">{feature.icon}</div>
      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
      <p className="text-lg text-gray-300 px-0 my-1">{feature.desc}</p>
    </div>
  ))}
  {features.slice(4,8).map((feature, index) => (
    <div
    key={index}
    className="relative animate-fade-in border-l border-l-[#ffffff3d] p-[24px_32px_36px] backdrop-blur-sm transition-all duration-300  cursor-pointer 
      hover:shadow-xl hover:bg-gradient-to-t from-[#030115] via-[#100D20] to-[#2C2A3D]
      before:content-[''] before:absolute before:w-[3px] before:h-[16px] before:left-[-2px] before:top-[80px] before:bg-[#ffffff3d]"
  >
      <div className="mb-4 text-purple-400">{feature.icon}</div>
      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
      <p className="text-lg text-gray-300 px-0 my-1">{feature.desc}</p>
    </div>
    
  ))}
</div>

   
 
  
  


    </div>
  );
}

  







































// import { GradientLight } from "./design/Benefits.jsx";
// import ClipPath from "../../assets/svg/ClipPath.jsx";
// import card1 from "../../assets/benefits/card1.svg";
// import card2 from "../../assets/benefits/card-2.svg";
// import card3 from "../../assets/benefits/card-3.svg";
// import card4 from "../../assets/benefits/card-4.svg";
// import card5 from "../../assets/benefits/card-5.svg";
// import card6 from "../../assets/benefits/card-6.svg";
// import benefitImage2 from "../../assets/benefits/benefitImage2.png";
// import { FaUsers, FaBullseye, FaLayerGroup, FaCheckCircle, FaHeadset, FaClipboardCheck } from "react-icons/fa";

// const Approach = () => {
//   const benefits = [
//     {
//       id: "0",
//       title: "Open and Honest Dialogue",
//       text: "We build lasting partnerships through transparent communication. No hidden agendas—just clear, straightforward discussions about our needs and your capabilities",
//       backgroundUrl: card1,
//       imageUrl: benefitImage2,
//       icon: <FaUsers className="text-4xl text-n-3" />, // Changed to FaUsers to match the silhouette icon
//     },
//     {
//       id: "1",
//       title: "Strategic Vision",
//       text: "Before writing any code, we analyze your workflow, users, and market position. This foundation helps us create solutions that truly serve your business needs.",
//       backgroundUrl: card2,
//       imageUrl: benefitImage2,
//       icon: <FaBullseye className="text-4xl text-n-3" />, // Kept FaBullseye as it aligns with the target concept
//       light: true,
//     },
//     {
//       id: "2",
//       title: "Active Management",
//       text: "Our leadership team stays involved throughout your project. From kickoff to delivery, you’ll have direct access to decision-makers who guide your project’s success",
//       backgroundUrl: card3,
//       imageUrl: benefitImage2,
//       icon: <FaLayerGroup className="text-4xl text-n-3" />, // Changed to FaLayerGroup to match the stack icon
//     },
//     {
//       id: "3",
//       title: "Simplicity First",
//       text: "Complex technology doesn’t mean complicated processes. We keep communication clear, documentation accessible, and progress transparent.",
//       backgroundUrl: card4,
//       imageUrl: benefitImage2,
//       icon: <FaCheckCircle className="text-4xl text-n-3" />, // Changed to FaCheckCircle to match the checkmark icon
//       light: true,
//     },
//     {
//       id: "4",
//       title: "Post-launch Support",
//       text: "We stay with you after your project goes live. We provide training, maintenance, and quick responses when you need help or want to make changes.",
//       backgroundUrl: card5,
//       imageUrl: benefitImage2,
//       icon: <FaHeadset className="text-4xl text-n-3" />, // Changed to FaHeadset to match the headset icon
//     },
//     {
//       id: "5",
//       title: "Deep Testing",
//       text: "Users get a smooth experience from day one. We test on real devices to catch problems before launch, so there won’t be any 'surprises' waiting for you.",
//       backgroundUrl: card6,
//       imageUrl: benefitImage2,
//       icon: <FaClipboardCheck className="text-4xl text-n-3" />, // Changed to FaClipboardCheck to match the magnifying glass/document icon
//     },
//   ];

//   return (
//     <section id="features">
//       <div className="container relative z-2">
//         <div className="text-[white] text-[40px] font-semibold text-center">Our Approach</div>
//         <div className="text-[white] text-[20px] font-semibold text-center md:p-[20px] p-[5px]">
//           What sets us apart is how we work with clients. We combine technical excellence with business understanding to create lasting partnerships. Our transparent communication and collaborative mindset ensure solutions that deliver ongoing value.
//         </div>

//         <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
//           {benefits.map((item) => (
//             <div
//               className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
//               key={item.id}
//             >
//               <img src={item.backgroundUrl} className="absolute" alt="" />

//               <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
//                 <div className="mb-5">{item.icon}</div>
//                 <h5 className="h5 mb-5">{item.title}</h5>
//                 <p className="body-2 mb-6 text-n-3">{item.text}</p>
//               </div>

//               {item.light && <GradientLight />}

//               <div
//                 className="absolute inset-0.5 bg-n-8"
//                 style={{ clipPath: "url(#benefits)" }}
//               >
//                 <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
//                   {item.imageUrl && (
//                     <img
//                       src={item.imageUrl}
//                       width={380}
//                       height={362}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                 </div>
//               </div>

//               <ClipPath />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Approach;