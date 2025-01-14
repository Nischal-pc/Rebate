import { useEffect, useState } from "react";

const SavingsCountdown = ({ targetAmount }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let currentAmount = 0;
    const interval = setInterval(() => {
      if (currentAmount < targetAmount) {
        currentAmount += Math.ceil(targetAmount / 50); // Adjust speed
        setAmount(Math.min(currentAmount, targetAmount));
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust delay for smooth animation

    return () => clearInterval(interval);
  }, [targetAmount]);

  return <span>${amount.toLocaleString()}</span>;
};

const RoadmapAndSavings = ({ calculatedResult }) => {
  return (
    <div>
      {/* Estimate Savings Section */}
      <div className="w-full max-w-md p-6 mt-8 bg-gray-50 rounded-lg text-center mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Your Estimated Savings
        </h3>
        <p className="text-lg text-gray-600 mb-2">
          Based on your current electricity and gas usage, you could save:
        </p>
        {/* <div className="text-4xl font-extrabold text-green-500 mt-4 flex justify-center items-center">
          <SavingsCountdown targetAmount={calculatedResult} />
          <span
            className="text-4xl
          "
          >
            {" "}
            {""}/Year
          </span>

        </div> */}
        <div className="relative mt-6">
          <div className="text-6xl font-extrabold text-green-600 flex justify-center items-center">
            <SavingsCountdown targetAmount={calculatedResult} />
            <span className="ml-2 text-2xl text-gray-700">/Year</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-400 opacity-30 rounded-full blur-lg"></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          *This is an estimate based on the information provided. Actual savings
          may vary.
        </p>
      </div>
    </div>
  );
};

export default RoadmapAndSavings;
