import HomeEfficency from "./HomeEfficency";
const EligibilityChecker = () => {
  return (
    <div className="bg-blue-50 py-8 px-4">
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
    </div>
  );
};

export default EligibilityChecker;
