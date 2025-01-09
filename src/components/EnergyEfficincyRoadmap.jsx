const EnergyGuideBox = ({ type, rating, description }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
      <div className="flex mb-4 space-x-4">
        <div className="bg-black text-white px-6 py-4 rounded-xl w-1/2">
          <div className="text-sm uppercase tracking-widest text-gray-400">
            ENERGUIDE Rating
          </div>
          <div className="text-3xl font-extrabold">{rating} GJ/year</div>
        </div>
        <div className="bg-green-600 text-white px-6 py-4 rounded-xl w-1/2">
          <div className="text-sm uppercase tracking-widest text-gray-400">
            Estimated Household Energy Use
          </div>
          <div className="text-3xl font-extrabold">{rating - 16} GJ/year</div>
        </div>
      </div>
      <div className="text-xs mt-2 text-center text-gray-500">
        Calculated using {description} operating conditions
      </div>
    </div>
  );
};

const RoadmapItem = ({ number, icon, title, align = "left" }) => {
  return (
    <div
      className={`
      flex items-center gap-2 bg-white p-6 rounded-xl shadow-lg 
      border border-green-200 hover:scale-105 transition-transform 
      ${align === "left" ? "flex-row" : "flex-row-reverse"} 
      max-w-xs w-full
    `}
    >
      <div className="text-2xl font-bold text-green-600 w-10">{number}</div>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-3xl shadow-inner">
        {icon}
      </div>
      <div className="text-base font-medium text-gray-700 flex-grow">
        {title}
      </div>
    </div>
  );
};

const EnergyEfficiencyRoadmap = () => {
  return (
    <div className="min-h-screen p-2">
      <div className="text-center mt-16 text-4xl font-bold text-green-500">
        YOUR ENERGY EFFICIENCY
        <br />
        ACTION ROADMAP
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">Before Recommended Upgrades</div>
        <div className="flex justify-center mb-12">
          <EnergyGuideBox type="Current" rating={146} description="standard" />
        </div>

        <div className="relative mt-20 mb-20">
          {/* Outer glow ring */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-green-400 to-yellow-300 opacity-20 blur-xl animate-pulse" />

          {/* Circular background with gradient */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-green-400 opacity-20" />

          {/* Multiple decorative rings */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-green-300 opacity-40" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-yellow-300 opacity-30" />

          {/* Inner circle with glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)] overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-yellow-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.1),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(234,179,8,0.1),transparent_70%)]" />
          </div>

          {/* Decorative circles */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-green-200 animate-[spin_20s_linear_infinite]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-yellow-200 animate-[spin_25s_linear_infinite_reverse]" />

          {/* Center content */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[300px] backdrop-blur-sm rounded-2xl p-8">
            <div className="text-4xl font-bold bg-gradient-to-br from-green-600 to-green-500 bg-clip-text text-transparent mb-2 drop-shadow">
              ENERGY
            </div>
            <div className="text-2xl font-semibold bg-gradient-to-br from-yellow-500 to-green-500 bg-clip-text text-transparent tracking-wider">
              ROADMAP
            </div>
            <div className="mt-4 text-sm text-green-700 font-medium">
              Your path to efficiency
            </div>
          </div>

          {/* Roadmap items positioned in a circle */}
          <div className="relative h-[600px]">
            {/* Item 1 - Top */}
            {/* <div className="absolute left-40 -top-16">
              <RoadmapItem number="1" icon="🏠" title="Insulate Foundation" />
            </div> */}
            <div className="absolute left-40 -top-16">
              <RoadmapItem
                number="1"
                icon="🌡️"
                title="Upgrade Heating System"
              />
            </div>

            {/* Item 2 - Top Right */}
            {/* <div
              className="absolute -right-64 top-[40%]"
              //   style={{ transform: "rotate(deg)" }}
            >
              <RoadmapItem
                number="2"
                icon="💨"
                title="Upgrade Ventilation System"
                align="right"
              />
            </div> */}
            <div className="absolute -right-64 top-[40%]">
              <RoadmapItem
                number="2"
                icon="💧"
                title="Upgrade Hot Water System"
              />
            </div>

            {/* Item 3 - Bottom Right */}
            {/* <div
              className="absolute -right-60 top-[65%]"
              //   style={{ transform: "rotate(-45deg)" }}
            >
              <RoadmapItem
                number="3"
                icon="🌡️"
                title="Upgrade Heating System"
                align="right"
              />
            </div> */}

            {/* Item 4 - Bottom Left */}
            {/* <div className="absolute left-40 top-[92%]">
              <RoadmapItem number="4" icon="🚪" title="Air Seal" />
            </div> */}
            <div className="absolute left-40 top-[91%]">
              <RoadmapItem
                number="3"
                icon="🌡️"
                title="Upgrade Heating System"
              />
            </div>

            {/* Item 5 - Top Left */}
            <div className="absolute -left-64 top-[40%]">
              <RoadmapItem number="4" icon="💧" title="Install Thermostat" />
            </div>
          </div>
        </div>

        <div className="text-center mt-16 mb-4">After recommended upgrades</div>
        <div className="flex justify-center">
          <EnergyGuideBox
            type="Potential"
            rating={114}
            description="standard"
          />
        </div>
      </div>
    </div>
  );
};

export default EnergyEfficiencyRoadmap;
