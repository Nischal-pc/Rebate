import { useState } from "react";

const RebatesAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  return (
    <div className="w-[60vw] mx-auto p-4">
      {/* HER+ Accordion */}
      <div className="border border-gray-300 rounded-lg mb-4">
        <button
          className="w-full text-left px-4 py-3 bg-blue-100 text-blue-700 font-bold hover:bg-blue-200"
          onClick={() => toggleAccordion("her-plus")}
        >
          Home Efficiency Rebate Plus (HER+)
        </button>
        {openAccordion === "her-plus" && (
          <div className="px-4 py-3">
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-700">
              The HER+ program offers rebates for homeowners to make
              energy-efficient upgrades, including insulation, windows, doors,
              heating systems, and more.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">How to Qualify</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Must own a detached, semi-detached, row house, or mobile home on
                a permanent foundation.
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
                Proof of residence (e.g., property tax bill or lease agreement).
              </li>
              <li>Receipts or invoices for completed work and materials.</li>
              <li>Proof of energy audit completion.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Rebate Amounts</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Home insulation: Up to $10,000</li>
              <li>Air sealing: Up to $1,300</li>
              <li>Windows and doors: Up to $325 per unit</li>
              <li>Space and water heating: Up to $6,500</li>
              <li>Smart thermostats: Up to $125</li>
              <li>Solar panels: Up to $5,000</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Steps to Apply</h3>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Book an energy audit with a licensed advisor.</li>
              <li>Complete eligible energy upgrades.</li>
              <li>
                Submit your receipts and application through the Enbridge Gas
                website.
              </li>
            </ol>
          </div>
        )}
      </div>

      {/* OER Accordion */}
      <div className="border border-gray-300 rounded-lg">
        <button
          className="w-full text-left px-4 py-3 bg-green-100 text-green-700 font-bold hover:bg-green-200"
          onClick={() => toggleAccordion("oer")}
        >
          Ontario Electricity Rebate (OER)
        </button>
        {openAccordion === "oer" && (
          <div className="px-4 py-3">
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-700">
              The OER program provides a percentage rebate on electricity bills
              for eligible residential and small business customers in Ontario.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">How to Qualify</h3>
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
              Required Documents
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Proof of residency or business ownership.</li>
              <li>Completed OER self-declaration form, if required.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Rebate Amount</h3>
            <p className="text-gray-700">
              Eligible customers receive a 17% rebate on their electricity
              bills.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Steps to Apply</h3>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Confirm eligibility with your electricity provider.</li>
              <li>Submit the OER self-declaration form if applicable.</li>
              <li>
                Receive the rebate automatically on your electricity bills.
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default RebatesAccordion;
