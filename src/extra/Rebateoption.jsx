import { useState } from "react";

const Rebateoption = () => {
  const [openAccordion, setOpenAccordion] = useState("her-plus");

  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-sans font-extrabold text-black mb-8">
          Rebates that Make a Difference in Your Wallet: Check out the below
          Rebates
        </h1>
      </div>

      <div>
        {/* Button Section */}
        <div className="p-1 flex flex-wrap items-center justify-center gap-8 w-full">
          {" "}
          {/* Added gap for spacing between buttons */}
          <div
            className="flex-shrink-0 m-6 w-[50vw] relative overflow-hidden bg-[white] rounded-lg max-w-xs shadow-lg group"
            onClick={() => toggleAccordion("her-plus")}
          >
            <svg
              className="absolute bottom-0  left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="red"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="red"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="green"
              />
            </svg>
            <button className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform w-full">
              {" "}
              {/* w-full for full width */}
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <img className="relative w-40" src="assets/one.png" alt="" />
            </button>
            <div className="relative text-black px-6 pb-6 mt-6">
              <div className="flex justify-between">
                <span className="block font-semibold font-sans text-xl">
                  Enbridge
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg group w-[50vw]"
            onClick={() => toggleAccordion("oer")}
          >
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="red"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="green"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform w-full">
              {" "}
              {/* w-full for full width */}
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <img className="relative w-40" src="assets/two.png" alt="" />
            </div>
            <div className="relative text-black px-6 pb-6 mt-6">
              <div className="flex justify-between">
                <span className="block font-sans font-semibold text-xl">
                  Save on Energy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="w-[60vw] mx-auto p-4">
          {/* HER+ Accordion */}
          {openAccordion === "" && (
            <div className="border-blue-600 shadow-lg rounded-lg">
              <h1 className="bg-green-600 text-white text-xl font-semibold p-4 rounded-t-lg">
                Enbridge HER+ Program
              </h1>
            </div>
          )}
          {openAccordion === "her-plus" && (
            <div className="border-blue-600 rounded-lg">
              <h1 className="bg-green-600 text-white text-xl font-semibold p-4 rounded-t-lg">
                Enbridge HER+ Program
              </h1>
              <div className="px-4 py-3 border">
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-gray-700">
                  The HER+ program offers rebates for homeowners to make
                  energy-efficient upgrades, including insulation, windows,
                  doors, heating systems, and more.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  How to Qualify
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Must own a detached, semi-detached, row house, or mobile
                    home on a permanent foundation.
                  </li>
                  <li>Be an Enbridge Gas residential customer.</li>
                  <li>
                    Complete an energy audit before and after making upgrades.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Required Documents
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Proof of residence (e.g., property tax bill or lease
                    agreement).
                  </li>
                  <li>
                    Receipts or invoices for completed work and materials.
                  </li>
                  <li>Proof of energy audit completion.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Rebate Amounts
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Home insulation: Up to $10,000</li>
                  <li>Air sealing: Up to $1,300</li>
                  <li>Windows and doors: Up to $325 per unit</li>
                  <li>Space and water heating: Up to $6,500</li>
                  <li>Smart thermostats: Up to $125</li>
                  <li>Solar panels: Up to $5,000</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Steps to Apply
                </h3>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>Book an energy audit with a licensed advisor.</li>
                  <li>Complete eligible energy upgrades.</li>
                  <li>
                    Submit your receipts and application through the Enbridge
                    Gas website.
                  </li>
                </ol>
              </div>
            </div>
          )}

          {/* OER Accordion */}
          {openAccordion === "oer" && (
            <div className="border-blue-600 rounded-lg">
              <h1 className="bg-blue-600 text-white text-xl font-semibold p-4 rounded-t-lg">
                Ontario Electricity Rebate
              </h1>
              <div className="px-4 py-3 border">
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-gray-700">
                  The OER program provides a percentage rebate on electricity
                  bills for eligible residential and small business customers in
                  Ontario.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  How to Qualify
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Residential homes, farms, and small businesses are eligible.
                  </li>
                  <li>
                    Customers must use less than 50 kW of demand or consume less
                    than 250,000 kWh annually.
                  </li>
                  <li>
                    Customers must complete the OER self-declaration form, if
                    applicable.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Rebate Amounts
                </h3>
                <p className="text-gray-700">
                  The rebate is calculated as a percentage reduction on the
                  total electricity bill. The current rebate is 17% of the
                  electricity portion of the bill.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Steps to Apply
                </h3>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>
                    Check if you are eligible by reviewing the requirements on
                    the OER website.
                  </li>
                  <li>
                    Submit your self-declaration form (if applicable) to the
                    Ontario Energy Board.
                  </li>
                  <li>Wait for approval and rebate processing.</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rebateoption;
