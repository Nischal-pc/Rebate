import { useContext, useRef, useEffect } from "react";
import { DataContext } from "./context/context";

const StepOne = ({ handleInputChange }) => {
  const { formData, setFormData } = useContext(DataContext);
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    // Function to initialize Google Maps Autocomplete
    const initializeAutocomplete = () => {
      if (window.google && inputRef.current) {
        const autocomplete = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["geocode"],
          }
        );
        autocompleteRef.current = autocomplete;

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          const address = {
            street: "",
            city: "",
            province: "",
            postalCode: "",
            country: "",
            fullAddress: place.formatted_address,
          };

          place.address_components.forEach((component) => {
            const types = component.types;
            if (types.includes("street_number")) {
              address.street = component.long_name;
            }
            if (types.includes("route")) {
              address.street += " " + component.long_name;
            }
            if (types.includes("locality")) {
              address.city = component.long_name;
            }
            if (types.includes("administrative_area_level_1")) {
              address.province = component.short_name;
            }
            if (types.includes("postal_code")) {
              address.postalCode = component.long_name;
            }
            if (types.includes("country")) {
              address.country = component.long_name;
            }
          });

          setFormData((data) => ({
            ...data,
            postalCode: address.postalCode,
          }));
        });
      } else {
        console.error("Google Maps API not loaded or inputRef is null");
      }
    };

    // Wait for Google Maps API to load
    const interval = setInterval(() => {
      if (window.google && inputRef.current) {
        clearInterval(interval);
        initializeAutocomplete();
      }
    }, 100);

    // Cleanup listener on unmount
    return () => {
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(
          autocompleteRef.current
        );
      }
      clearInterval(interval);
    };
  }, [setFormData]);

  return (
    <div>
      {/* Question 1 */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">
          Are you a resident of Ontario?
        </label>
        <div className="flex gap-x-4 mt-4">
          <button
            type="button"
            className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
              formData.residentOfOntario === "yes"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() =>
              handleInputChange({
                target: { name: "residentOfOntario", value: "yes" },
              })
            }
          >
            Yes
          </button>
          <button
            type="button"
            className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
              formData.residentOfOntario === "no"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() =>
              handleInputChange({
                target: { name: "residentOfOntario", value: "no" },
              })
            }
          >
            No
          </button>
        </div>
      </div>
      {/* Stop flow if "No" */}
      {formData.residentOfOntario === "no" && (
        <div className="mb-4 border rounded-3xl bg-red-200 border-red-500 p-4 text-gray-700">
          <div className="flex">
            <i className="fas fa-exclamation-triangle mt-1" />
            <span className="ml-4">
              To be eligible for these rebates, you must reside in Ontario.
            </span>
          </div>
        </div>
      )}

      {formData.residentOfOntario === "yes" && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Is this your primary residence?
          </label>
          <div className="flex gap-x-4 mt-4">
            <button
              type="button"
              className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
                formData.primaryResidence === "yes"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() =>
                handleInputChange({
                  target: { name: "primaryResidence", value: "yes" },
                })
              }
            >
              Yes
            </button>
            <button
              type="button"
              className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
                formData.primaryResidence === "no"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() =>
                handleInputChange({
                  target: { name: "primaryResidence", value: "no" },
                })
              }
            >
              No
            </button>
          </div>
        </div>
      )}
      {formData.primaryResidence && formData.residentOfOntario === "yes" && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Enter your postal code:
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={(e) =>
              setFormData((data) => ({ ...data, postalCode: e.target.value }))
            }
            ref={inputRef}
            className="mt-2 block w-full px-4 py-2 border rounded-md"
            placeholder="Enter postal code"
          />
        </div>
      )}
      {/* Question about ownership */}
      {formData.postalCode && formData.residentOfOntario === "yes" && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Are you the registered property owner?
          </label>
          <div className="flex gap-x-4 mt-4">
            <button
              type="button"
              className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
                formData.ownerShip === "yes"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() =>
                handleInputChange({
                  target: { name: "ownerShip", value: "yes" },
                })
              }
            >
              Yes
            </button>
            <button
              type="button"
              className={`w-[30vw] mx-auto px-4 py-2 rounded-md font-medium ${
                formData.ownerShip === "no"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() =>
                handleInputChange({
                  target: { name: "ownerShip", value: "no" },
                })
              }
            >
              No
            </button>
          </div>
        </div>
      )}

      {formData.ownerShip && formData.residentOfOntario === "yes" && (
        <div className="mb-4 mt-4">
          <label className="block text-lg font-medium text-gray-700">
            What type of home do you have?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-4">
            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "detached" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-4 box-border ${
                  formData.homeType === "detached"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/house.png"
                  alt="Detached"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <span className="text-sm md:text-md text-center">
                Detached/Semi-detached
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "rowHouse" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-4 box-border ${
                  formData.homeType === "rowHouse"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/townhouse.png"
                  alt="Row House"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <span className="text-sm md:text-md text-center">
                Row House or Townhouse
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "mobileHome" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-4 box-border ${
                  formData.homeType === "mobileHome"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/tinyhouse.png"
                  alt="Mobile Home"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <span className="text-sm md:text-md text-center">
                Mobile Home on a Permanent Foundation
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "floatingHouse" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-4 box-border ${
                  formData.homeType === "floatingHouse"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/houseboat.png"
                  alt="Floating House"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <span className="text-sm md:text-md text-center">
                Permanently Moored Floating House
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center space-y-2"
              onClick={() =>
                handleInputChange({
                  target: { name: "homeType", value: "none" },
                })
              }
            >
              <div
                className={`flex items-center justify-center border-4 rounded-md p-4 box-border ${
                  formData.homeType === "none"
                    ? "border-green-700"
                    : "border-gray-200"
                }`}
              >
                <img
                  src="/assets/5.png"
                  alt="None"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <span className="text-sm md:text-md text-center">
                None of the Above
              </span>
            </button>
          </div>
        </div>
      )}
      {/* Stop flow if "None of the Above" is selected */}

      {/* {formData.residentOfOntario === "yes" && formData.homeType === "none" && (
        <div className="mb-4 border rounded-3xl bg-red-200 border-red-500 p-4 text-gray-700">
          <div className="flex">
            <i className="fas fa-exclamation-triangle mt-1" />
            <span className="ml-4">
              Your type of home isn't eligible for these rebates.
            </span>
          </div>
        </div>
      )} */}

      {formData.homeType &&
        formData.residentOfOntario === "yes" &&
        formData.homeType !== "none" && (
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">
              How long have you owned this property?
            </label>
            <select
              name="ownershipLength"
              value={formData.ownershipLength}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 block w-full border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="lessThan6Months">Less than 6 months</option>
              <option value="6MonthsTo1Year">6 months to 1 year</option>
              <option value="1To2Years">1 to 2 years</option>
              <option value="moreThan2Years">More than 2 years</option>
            </select>
          </div>
        )}

      {formData.ownershipLength &&
        formData.residentOfOntario === "yes" &&
        formData.homeType !== "none" && (
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">
              What is your total household income (approximately)?
            </label>
            <select
              name="income"
              value={formData.income}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 block w-full border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="lessThan30000">Less than $30,000</option>
              <option value="30000to50000">$30,000 to $50,000</option>
              <option value="50000to70000">$50,000 to $70,000</option>
              <option value="70000to100000">$70,000 to $100,000</option>
              <option value="greaterThan100000">Greater than $100,000</option>
            </select>
          </div>
        )}
      {formData.income &&
        formData.residentOfOntario === "yes" &&
        formData.homeType !== "none" && (
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">
              How old is your house?
            </label>
            <select
              name="homeAge"
              value={formData.homeAge}
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
    </div>
  );
};

export default StepOne;
