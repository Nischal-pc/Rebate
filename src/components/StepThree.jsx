import { useEffect, useState } from "react";
import TiltCard from "./card/TiltCard";
const StepThree = () => {
  const [showFlowers, setShowFlowers] = useState(false);
  const insulationData = [
    {
      title: "Attic Insulation",
      description: "Stop heat from escaping through your roof.",
      savings: "Up to $1,500",
    },
    {
      title: "Exterior Wall Insulation",
      description:
        "Eliminate drafts, control moisture and minimize outside noise.",
      savings: "Up to $3,600",
    },
    {
      title: "Exposed Floor Insulation",
      description: "Improve comfort and save energy.",
      savings: "$300",
    },
    {
      title: "Basement Insulation",
      description: "Some of your home’s heat loss occurs through the basement.",
      savings: "Up to $3,500",
    },
    {
      title: "Air Sealing",
      description: "Save energy and improve air quality with draft proofing.",
      savings: "Up to $180",
    },
    {
      title: "Heat Pumps",
      description:
        "Including ground source heat pumps, air source heat pumps, cold climate air source heat pumps, and heat pump water heaters.",
      savings: "Up to $3,000",
    },
    // {
    //   title: "Windows/Doors/Sliding Doors/Skylights",
    //   description: "For ENERGY STAR® certified models.",
    //   savings: "$50 each",
    // },
  ];

  useEffect(() => {
    // Trigger flower animation when the component is rendered
    setShowFlowers(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-md font-bold mb-4">
        Congratulations! You are eligible for one of the following upgrades
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {insulationData.map((item, idx) => {
          return (
            <div key={idx}>
              <TiltCard
                title={item.title}
                desc={item.description}
                saving={item.savings}
              />
            </div>
          );
        })}
      </div>

      {/* Falling Icons */}
      {showFlowers && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="absolute text-4xl animate-fall"
              style={{
                top: `${Math.random() * -40}%`, // Randomize the starting position higher
                left: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.3}s`,
              }}
            >
              {/* Font Awesome Icon */}
              <i className="fas fa-gift text-yellow-500" />{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StepThree;
