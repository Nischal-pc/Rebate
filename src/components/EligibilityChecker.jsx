import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import HomeEfficency from "./HomeEfficency";

const EligibilityChecker = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-blue-50 py-8 px-4" id="root1">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Eligibility Checker
        </h1>
        <p className="text-lg text-gray-600">
          Find out if you are eligible for various Ontario rebates based on your
          personal details.
        </p>
      </header>

      <HomeEfficency />
      <div className="border-t border-gray-300 m-3">
        <div className="container py-6 px-6 mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Disclaimer
            </h3>
          </div>
          <p className="text-sm text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="font-medium text-gray-900">
              Energy Efficiency Broker Canada
            </span>{" "}
            is your trusted guide to navigating energy rebates and incentives
            for homeowners. While we strive to keep all information accurate and
            up-to-date, rebate programs, eligibility criteria, and funding
            availability are subject to change.
          </p>
          <p className="text-sm text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
            We are not affiliated with any government agency, utility provider,
            or financial institution, nor do we administer or guarantee the
            approval of rebates, grants, or loans. To ensure the best outcomes,
            we encourage you to confirm program details directly with the
            relevant authorities before taking action.
          </p>
          <p className="text-sm text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
            The information we share is intended to inform and empower, not to
            replace official advice.{" "}
            <span className="font-medium text-gray-900">
              Energy Efficiency Broker Canada
            </span>{" "}
            cannot be held liable for decisions, outcomes, or actions taken
            based on the information provided on our platform.
          </p>
          <p className="text-sm text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
            By using our services, you agree to these terms and acknowledge our
            role as an independent resource, not a program administrator.
          </p>
        </div>
      </div>

      {/* <div className="border-t border-gray-300 m-3">
        <div className="container py-6 px-4 mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-3">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
            <h3 className="text-md font-semibold text-gray-800 uppercase">
              Disclaimer
            </h3>
          </div>
          <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-medium">Energy Efficiency Broker Canada</span>{" "}
            is an independent organization that provides information on energy
            rebates and incentives available to homeowners. While we strive to
            keep all information accurate and up-to-date, rebate programs,
            eligibility criteria, and funding availability are subject to
            change.
          </p>
          <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            We do not administer or guarantee the approval of any rebates,
            grants, or loans listed on our platform. Homeowners are encouraged
            to verify program details directly with the respective government
            agencies, utility providers, or financial institutions before making
            any decisions.
          </p>
          <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            <span className="font-medium">Energy Efficiency Broker Canada</span>{" "}
            does not assume liability for any errors, omissions, or financial
            outcomes resulting from reliance on the information provided. By
            using our services, you acknowledge that we are not responsible for
            third-party actions, program approvals, or rebate disbursements.
          </p>
          <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            We recommend consulting with our professionals for personalized
            energy efficiency solutions.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default EligibilityChecker;
