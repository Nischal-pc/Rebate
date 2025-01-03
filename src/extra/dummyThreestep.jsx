//
<div className="w-full mx-auto px-6 py-8 bg-white  ">
  Qualification Criteria
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Eligibility Requirements
    </h2>
    <p className="text-lg text-gray-700 mb-2">
      To qualify for the following programs, you need to meet these
      requirements:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>Home Efficiency Rebate</li>
      <li>Canada Greener Homes Loan</li>
      <li>HomeEnergySaver Program</li>
      <li>Oil to Heat Pump Affordability Program</li>
    </ul>

    <p className="font-semibold text-lg text-gray-700">Requirements:</p>
    <ul className="list-disc list-inside text-gray-700">
      <li>
        Complete an energy assessment before and after your home upgrades.
      </li>
      <li>Do at least two eligible energy upgrades.</li>
      <li>Provide receipts for all the upgrades you’ve done.</li>
      <li>
        Finish the post-assessment within 120 days after the first assessment.
      </li>
    </ul>
  </div>
  {/* Prequalify Statement Consent */}
  <div className="mb-6">
    <p className="text-gray-700 text-lg mb-2">
      {
        "By continuing, you confirm that you’ve read and understood the requirements for these programs and agree to move forward with the eligibility check."
      }
    </p>
    <div className="flex items-center gap-x-3">
      {/* Checkbox for Agreement */}
      <input
        type="checkbox"
        name="prequalifyConsent"
        id="prequalifyConsent"
        checked={formData.prequalifyConsent === "yes"}
        onChange={() =>
          handleInputChange({
            target: {
              name: "prequalifyConsent",
              value: formData.prequalifyConsent === "yes" ? "no" : "yes",
            },
          })
        }
        className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <span className="text-sm text-gray-600">
        I agree to the prequalifying statement and move forward with the
        eligibility check.
      </span>
    </div>
  </div>
  {/* Error Message */}
  {formData.prequalifyConsent === "no" && (
    <div className="mb-4 bg-red-50 border border-red-500 p-4 text-red-700 rounded-3xl">
      <div className="flex items-center">
        <i className="fas fa-exclamation-triangle text-red-600 mr-2" />
        <span>You must agree with the prequalifying statement to proceed.</span>
      </div>
    </div>
  )}
</div>;
