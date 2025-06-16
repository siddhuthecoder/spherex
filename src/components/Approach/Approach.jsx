import { GradientLight } from "./design/Benefits.jsx";
import ClipPath from "../../assets/svg/ClipPath.jsx";
import card1 from "../../assets/benefits/card1.svg";
import card2 from "../../assets/benefits/card-2.svg";
import card3 from "../../assets/benefits/card-3.svg";
import card4 from "../../assets/benefits/card-4.svg";
import card5 from "../../assets/benefits/card-5.svg";
import card6 from "../../assets/benefits/card-6.svg";
import benefitImage2 from "../../assets/benefits/benefitImage2.png";
import { FaUsers, FaBullseye, FaLayerGroup, FaCheckCircle, FaHeadset, FaClipboardCheck } from "react-icons/fa";

const Approach = () => {
  const benefits = [
    {
      id: "0",
      title: "Open and Honest Dialogue",
      text: "We build lasting partnerships through transparent communication. No hidden agendas—just clear, straightforward discussions about our needs and your capabilities",
      backgroundUrl: card1,
      imageUrl: benefitImage2,
      icon: <FaUsers className="text-4xl text-n-3" />, // Changed to FaUsers to match the silhouette icon
    },
    {
      id: "1",
      title: "Strategic Vision",
      text: "Before writing any code, we analyze your workflow, users, and market position. This foundation helps us create solutions that truly serve your business needs.",
      backgroundUrl: card2,
      imageUrl: benefitImage2,
      icon: <FaBullseye className="text-4xl text-n-3" />, // Kept FaBullseye as it aligns with the target concept
      light: true,
    },
    {
      id: "2",
      title: "Active Management",
      text: "Our leadership team stays involved throughout your project. From kickoff to delivery, you’ll have direct access to decision-makers who guide your project’s success",
      backgroundUrl: card3,
      imageUrl: benefitImage2,
      icon: <FaLayerGroup className="text-4xl text-n-3" />, // Changed to FaLayerGroup to match the stack icon
    },
    {
      id: "3",
      title: "Simplicity First",
      text: "Complex technology doesn’t mean complicated processes. We keep communication clear, documentation accessible, and progress transparent.",
      backgroundUrl: card4,
      imageUrl: benefitImage2,
      icon: <FaCheckCircle className="text-4xl text-n-3" />, // Changed to FaCheckCircle to match the checkmark icon
      light: true,
    },
    {
      id: "4",
      title: "Post-launch Support",
      text: "We stay with you after your project goes live. We provide training, maintenance, and quick responses when you need help or want to make changes.",
      backgroundUrl: card5,
      imageUrl: benefitImage2,
      icon: <FaHeadset className="text-4xl text-n-3" />, // Changed to FaHeadset to match the headset icon
    },
    {
      id: "5",
      title: "Deep Testing",
      text: "Users get a smooth experience from day one. We test on real devices to catch problems before launch, so there won’t be any 'surprises' waiting for you.",
      backgroundUrl: card6,
      imageUrl: benefitImage2,
      icon: <FaClipboardCheck className="text-4xl text-n-3" />, // Changed to FaClipboardCheck to match the magnifying glass/document icon
    },
  ];

  return (
    <section id="features">
      <div className="container relative z-2">
        <div className="text-[white] text-[40px] font-semibold text-center">Our Approach</div>
        <div className="text-[white] text-[20px] font-semibold text-center md:p-[20px] p-[5px]">
          What sets us apart is how we work with clients. We combine technical excellence with business understanding to create lasting partnerships. Our transparent communication and collaborative mindset ensure solutions that deliver ongoing value.
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <img src={item.backgroundUrl} className="absolute" alt="" />

              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <div className="mb-5">{item.icon}</div>
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;