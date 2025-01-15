import { useState, useEffect } from "react";
import { TrendingDown, DollarSign, Zap, PiggyBank } from "lucide-react";

const CountUpNumber = ({ end, duration = 6000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count.toLocaleString("en-US", { maximumFractionDigits: 2 });
};

const EnergyCostComparison = ({ totalCurrentCost, totalAfterUpgrades }) => {
  const savings = totalCurrentCost - totalAfterUpgrades;
  const savingsPercentage = ((savings / totalCurrentCost) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Energy Cost Analysis
        </h2>
        <p className="text-gray-600">
          Compare your current and projected energy costs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Cost Card */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-white to-red-50 rounded-xl border border-red-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-red-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
          <div className="relative">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">
                Current Annual Cost
              </h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Before implementing energy upgrades
            </p>
            <div className="flex items-baseline">
              <DollarSign className="w-8 h-8 text-red-600 mr-1 animate-pulse" />
              <span className="text-4xl font-bold text-gray-900">
                <CountUpNumber end={totalCurrentCost} />
              </span>
              <span className="text-gray-500 ml-2">/year</span>
            </div>
            <div className="mt-4 text-sm text-red-600">
              ⚠️ Higher energy consumption detected
            </div>
          </div>
        </div>

        {/* Projected Cost Card */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50 rounded-xl border border-green-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-green-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
          <div className="relative">
            <div className="flex items-center mb-4">
              <PiggyBank className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">
                Projected Annual Cost
              </h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              After implementing energy upgrades
            </p>
            <div className="flex items-baseline">
              <DollarSign className="w-8 h-8 text-green-600 mr-1" />
              <span className="text-4xl font-bold text-gray-900">
                <CountUpNumber end={totalAfterUpgrades} />
              </span>
              <span className="text-gray-500 ml-2">/year</span>
            </div>
            <div className="mt-4 text-sm text-green-600">
              ✓ Optimized energy efficiency
            </div>
          </div>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white rounded-full">
              <TrendingDown className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-800">
                Total Projected Annual Savings
              </p>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-green-700">
                  $<CountUpNumber end={savings} />
                </span>
                <span className="ml-2 text-green-600">
                  ({savingsPercentage}% reduction)
                </span>
              </div>
              <p className="text-sm text-green-600 mt-1">
                💚 Contributing to a sustainable future
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyCostComparison;
