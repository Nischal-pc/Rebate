const StepTwo = ({ formData, handleInputChange }) => {
  console.log(formData);
  return (
    <div>
      <div className="mb-4 mt-4">
        <label className="block text-lg font-medium text-gray-700">
          What is your current primary heating system?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-4">
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
                alt="Natural Gas Furnace"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-sm sm:text-md lg:text-lg">
              Natural Gas Furnace
            </span>
          </button>

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
                alt="Oil Furnace"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-sm sm:text-md lg:text-lg">
              Oil furnace or boiler
            </span>
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
                alt="Propane"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-sm sm:text-md lg:text-lg">Propane</span>
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
                alt="Electric Baseboard Heaters"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-sm sm:text-md lg:text-lg">
              Electric baseboard heaters
            </span>
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
                alt="Heat Pump"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-sm sm:text-md lg:text-lg">Heat Pump</span>
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
                alt="Other"
                className="w-full h-auto aspect-square scale-50 object-contain"
              />
            </div>
            <span className="text-sm sm:text-md lg:text-lg">Other</span>
          </button>
        </div>
      </div>
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
            <option value="6MonthsTo1Year">{"Others(Union ,EPCOR)"}</option>
          </select>
        </div>
      )}
      {formData.heatingSystem && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            How old is your Furnace & AC?
          </label>
          <select
            name="furnaceAge"
            value={formData.furnaceAge}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 block w-full border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="lessThan1Year">Less than 1 Year</option>
            <option value="1to5"> 1 to 5 Years</option>
            <option value="5to10">5 to 10 Years</option>
            <option value="Greaterthan10">Greater than 10 Years</option>
          </select>
        </div>
      )}
      {formData.furnaceAge && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            How old is your Water Heater?
          </label>
          <select
            name="heaterAge"
            value={formData.heaterAge}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 block w-full border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="lessThan1Year">Less than 1 Year</option>
            <option value="1to5"> 1 to 5 Years</option>
            <option value="5to10">5 to 10 Years</option>
            <option value="Greaterthan10">Greater than 10 Years</option>
          </select>
        </div>
      )}

      {formData.heaterAge && (
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
