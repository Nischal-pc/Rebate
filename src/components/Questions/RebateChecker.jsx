import { useState } from "react";

const RebateChecker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "primaryResidence",
      text: "Is this property your primary residence?",
      options: ["Yes", "No"],
      required: true,
    },
    {
      id: "ownership",
      text: "Are you the registered property owner?",
      options: ["Yes", "No"],
      required: true,
    },
    {
      id: "province",
      text: "In which province/territory is your property located?",
      options: [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon",
      ],
      required: true,
    },
    {
      id: "previousApplications",
      text: "Have you previously applied for or received any of these rebates? (Select all that apply)",
      options: [
        "Canada Greener Homes Loan",
        "Oil to Heat Pump Affordability Program",
        "HomeEnergySaver Program",
        "Home Efficiency Rebate",
        "None of the above",
      ],
      multiple: true,
      required: true,
    },
    {
      id: "sameProperty",
      text: "If you received previous rebates, was it for the same property?",
      options: ["Yes", "No", "Not applicable"],
      showIf: (answers) =>
        answers.previousApplications?.length > 0 &&
        !answers.previousApplications.includes("None of the above"),
    },
    {
      id: "ownershipLength",
      text: "How long have you owned this property?",
      options: [
        "Less than 6 months",
        "6 months to 1 year",
        "1-5 years",
        "More than 5 years",
      ],
      required: true,
    },
    {
      id: "propertyType",
      text: "What type of property is this?",
      options: [
        "Single-family home",
        "Semi-detached",
        "Row house/townhouse",
        "Mobile home on permanent foundation",
        "Multi-unit residential (apartment/condo)",
        "Other",
      ],
      required: true,
    },
    {
      id: "propertyAge",
      text: "What is the age of your property?",
      options: [
        "Less than 6 months",
        "6 months to 5 years",
        "5-15 years",
        "15-30 years",
        "Over 30 years",
      ],
      required: true,
    },
    {
      id: "heatingSystem",
      text: "What is your current primary heating system?",
      options: [
        "Oil furnace or boiler",
        "Electric baseboard heaters",
        "Natural gas furnace",
        "Heat pump",
        "Wood/pellet stove",
        "Other",
      ],
      required: true,
    },
    {
      id: "energyAudit",
      text: "Have you completed a pre-retrofit EnerGuide home energy evaluation?",
      options: ["Yes", "No", "Scheduled but not completed"],
      required: true,
    },
    {
      id: "income",
      text: "What is your annual household income?",
      options: [
        "Under $35,000",
        "$35,000 - $55,000",
        "$55,000 - $75,000",
        "$75,000 - $100,000",
        "Over $100,000",
      ],
      required: true,
    },
    {
      id: "plannedUpgrades",
      text: "Which energy efficiency upgrades are you planning? (Select all that apply)",
      options: [
        "Heat pump installation",
        "Insulation improvements",
        "Window/door replacements",
        "Hot water heater upgrade",
        "Solar panels",
        "Smart thermostats",
        "Other",
        "Not sure yet",
      ],
      multiple: true,
      required: true,
    },
    {
      id: "previousUpgrades",
      text: "What upgrades have you already completed or received rebates for? (Select all that apply)",
      options: [
        "Heat pump installation",
        "Insulation improvements",
        "Window/door replacements",
        "Hot water heater upgrade",
        "Solar panels",
        "Smart thermostats",
        "Other",
        "None",
      ],
      multiple: true,
      showIf: (answers) => answers.sameProperty === "Yes",
    },
  ];

  const handleAnswer = (answer) => {
    const question = questions[currentStep];

    if (question.multiple) {
      setAnswers((prev) => ({
        ...prev,
        [question.id]: prev[question.id]
          ? prev[question.id].includes(answer)
            ? prev[question.id].filter((a) => a !== answer)
            : [...prev[question.id], answer]
          : [answer],
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [question.id]: answer,
      }));

      let nextStep = currentStep + 1;
      while (
        nextStep < questions.length &&
        questions[nextStep].showIf &&
        !questions[nextStep].showIf(answers)
      ) {
        nextStep++;
      }

      if (nextStep < questions.length) {
        setCurrentStep(nextStep);
      } else {
        setShowResults(true);
      }
    }
  };

  const determineEligibility = () => {
    const results = {
      greenerHomes: {
        name: "Canada Greener Homes Loan",
        eligible: false,
        reasons: [],
      },
    };

    return results;
  };

  if (showResults) {
    const results = determineEligibility();
    return (
      <div>
        <h2>Results</h2>
        {Object.entries(results).map(([key, result]) => (
          <div key={key}>
            <div>{result.name}</div>
            <div>{result.eligible ? "You are eligible!" : "Not eligible."}</div>
          </div>
        ))}
      </div>
    );
  }

  const question = questions[currentStep];
  return (
    <div>
      <div>
        <div>{question.text}</div>
      </div>
      <div>
        {question.options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RebateChecker;
