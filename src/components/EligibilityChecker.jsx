import HomeEfficency from "./HomeEfficency";
const EligibilityChecker = () => {
  return (
    <div className="bg-blue-50 py-8 px-4" id="eligibility-checker">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Eligibility Checker
        </h1>
        <p className="text-lg text-gray-600">
          Find out if you are eligible for various Ontario rebates based on your
          personal details.
        </p>
      </header>

      {/* <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Check Your Eligibility
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="rebateType" className="block text-lg text-gray-700">
              Select Rebate Type
            </label>
            <select
              name="rebateType"
              id="rebateType"
              className="mt-2 w-full p-3 border rounded-md text-gray-700"
              value={formData.rebateType}
              onChange={handleInputChange}
            >
              <option value="energy">HomeEnergySaver Program </option>
              <option value="greenerHomes">Home Efficiency Rebate</option>
            </select>
          </div>

          
        </form>
      </div>
      {formData.rebateType === "greenerHomes" && <HomeEfficency />} */}
      <HomeEfficency />
    </div>
  );
};

export default EligibilityChecker;
