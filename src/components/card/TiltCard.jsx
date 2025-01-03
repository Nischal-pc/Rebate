import { useEffect, useRef } from "react";

const TiltCard = ({ title, desc, saving }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const content = contentRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = -((y - centerY) / centerY);

      card.style.transform = `perspective(1000px) rotateY(${
        percentX * 10
      }deg) rotateX(${percentY * 10}deg)`;
      content.style.transform = `translateZ(50px)`;
      glow.style.opacity = "1";
      glow.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, #ffffff44, #0000000f)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
      content.style.transform = "translateZ(0px)";
      glow.style.opacity = "0";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-white  flex items-center justify-center overflow-hidden">
      <div
        ref={cardRef}
        className="tilt-card w-80 h-[40vh] bg-gradient-to-br from-purple-200 to-blue-300 rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 ease-out hover:scale-105"
      >
        <div
          ref={glowRef}
          className="glow opacity-0 transition-opacity duration-300"
        ></div>
        <div
          ref={contentRef}
          className="tilt-card-content p-6 flex flex-col justify-between relative z-10"
        >
          <h2 className="text-2xl font-bold text-black mb-2 line-clamp-1 ">
            {title}
          </h2>
          <p className="text-black line-clamp-2">{desc}</p>

          <div className="text-2xl font-bold text-black">{saving}</div>
          {/* <button className="w-full py-2 bg-white text-purple-700 rounded-lg font-semibold transform transition hover:scale-105 active:scale-95">
              Explore Now
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
