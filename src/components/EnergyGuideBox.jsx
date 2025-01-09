const EnergyGuideBox = ({ type, rating, description, title }) => {
  return (
    <div className="flex flex-col items-center w-[10vw] ">
      <div className="text-center mb-4">{title}</div>
      <div className="flex mb-2 space-x-2">
        <div className="bg-black text-white px-4 py-4 rounded-xl w-1/2">
          <div className="text-sm uppercase tracking-widest text-gray-400">
            ENERGUIDE Rating
          </div>
          <div className="text-3xl font-extrabold">{rating} GJ/year</div>
        </div>
        <div className="bg-green-600 text-white px-6 py-4 rounded-xl w-1/2">
          <div className="text-sm uppercase tracking-widest text-white">
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
export default EnergyGuideBox;
