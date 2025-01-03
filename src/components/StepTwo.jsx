const StepTwo = ({ formData, handleInputChange }) => {
  const canProceed = formData.prequalifyConsent === "yes";

  return (
    <div>
      <div className="mb-4 mt-4">
        <label className="block text-lg font-medium text-gray-700">
          What is your current primary heating system?
        </label>
        <div className="grid grid-cols-5 gap-8 mt-4">
          <button
            type="button"
            className="flex flex-col items-center space-y-2"
            onClick={() =>
              handleInputChange({
                target: { name: "heatingSystem", value: "oilFurnace" },
              })
            }
          >
            <div
              className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                formData.heatingSystem === "oilFurnace"
                  ? "border-green-700"
                  : "border-gray-200"
              }`}
            >
              <img
                src="/assets/oil.png"
                alt="Detached"
                className="w-full h-auto aspect-square scale-50 scale object-contain"
              />
            </div>
            <span className="text-md">Oil furnace or boiler</span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center space-y-2"
            onClick={() =>
              handleInputChange({
                target: { name: "heatingSystem", value: "propane" },
              })
            }
          >
            <div
              className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                formData.heatingSystem === "propane"
                  ? "border-green-700"
                  : "border-gray-200"
              }`}
            >
              <img
                src="/assets/propane.png"
                alt="Detached"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-md">Propane</span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center space-y-2"
            onClick={() =>
              handleInputChange({
                target: { name: "heatingSystem", value: "naturalGas" },
              })
            }
          >
            <div
              className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                formData.heatingSystem === "naturalGas"
                  ? "border-green-700"
                  : "border-gray-200"
              }`}
            >
              <img
                src="/assets/naturalgas.png"
                alt="Detached"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-md">Natural Gas Furnace</span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center space-y-2"
            onClick={() =>
              handleInputChange({
                target: { name: "heatingSystem", value: "heatpump" },
              })
            }
          >
            <div
              className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                formData.heatingSystem === "heatpump"
                  ? "border-green-700"
                  : "border-gray-200"
              }`}
            >
              <img
                src="/assets/heatpump.png"
                alt="Detached"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-md">Heat Pump</span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center space-y-2"
            onClick={() =>
              handleInputChange({
                target: { name: "heatingSystem", value: "other" },
              })
            }
          >
            <div
              className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                formData.heatingSystem === "other"
                  ? "border-green-700"
                  : "border-gray-200"
              }`}
            >
              <img
                src="/assets/other.png"
                alt="Detached"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-md">Other</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
