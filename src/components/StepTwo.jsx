const StepTwo = ({ formData, handleInputChange }) => {
  const canProceed = formData.prequalifyConsent === "yes";
  console.log(formData);
  return (
    <div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">
          How old is your Furnace & AC?
        </label>
        <input
          type="number"
          name="furnaceAge"
          value={formData.furnaceAge}
          onChange={handleInputChange}
          className="mt-2 block w-full px-4 py-2 border rounded-md"
          placeholder="Enter Furnace & AC age"
          min="0"
        />
      </div>
      {formData.furnaceAge && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            How old is your Water Heater?
          </label>
          <input
            type="number"
            name="heaterAge"
            value={formData.heaterAge}
            onChange={handleInputChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md"
            placeholder="Enter Water Heater Age"
            min="0"
          />
        </div>
      )}
      {formData.heaterAge && (
        <div className="mb-4 mt-4">
          <label className="block text-lg font-medium text-gray-700">
            What is your current primary heating system?
          </label>
          <div className="grid grid-cols-6 gap-8 mt-4">
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
                  target: { name: "heatingSystem", value: "baseboard" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-2 box-border ${
                  formData.heatingSystem === "baseboard"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/baseheater.png"
                  alt="Detached"
                  className="w-full h-auto aspect-square scale-50 scale object-contain"
                />
              </div>
              <span className="text-md">Electric baseboard heaters</span>
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
      )}
      {formData.heatingSystem === "naturalGas" && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Who is your Gas Provider?
          </label>
          <select
            name="gasProvider"
            value={formData.gasProvider}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 block w-full border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="enbridge">Enbridge</option>
            <option value="6MonthsTo1Year">Others</option>
          </select>
        </div>
      )}
      {formData.heatingSystem && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            How much is your gas bill(approximately)?
          </label>
          <input
            type="number"
            name="gasBill"
            value={formData.gasBill}
            onChange={handleInputChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md"
            placeholder="Enter Gas Bill"
          />
        </div>
      )}
      {formData.gasBill && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            How much is your Electricity bill(approximately)?
          </label>
          <input
            type="number"
            name="electricBill"
            value={formData.electricBill}
            onChange={handleInputChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md"
            placeholder="Enter Gas Bill"
          />
        </div>
      )}
    </div>
  );
};

export default StepTwo;
