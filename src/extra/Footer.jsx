import { useState } from "react";
const Footer = () => {
  const [step, setStep] = useState(0); // Tracks the current question or error state
  const [error, setError] = useState(false); // Tracks if there's an error

  const questions = [
    "Do you own a house?",
    "Do you use energy-efficient appliances?",
  ];

  // Handler for responses
  const handleResponse = (response) => {
    if (response === "yes") {
      if (step < questions.length) {
        setStep((prev) => prev + 1); // Move to the next question
        setError(false); // Clear error state
      } else {
        setStep(questions.length + 1); // End of questions
        setError(false);
      }
    } else {
      setError(true); // Show error message
    }
  };

  // Reset questionnaire
  const resetQuestionnaire = () => {
    setStep(0);
    setError(false);
  };

  // Redirect to booking (placeholder function)
  const bookAppointment = () => {
    alert("Redirecting to booking page...");
    // Replace this with your booking page navigation logic
  };
  return (
    // <div className="bg-[#31473A] h-[50vh] flex flex-col  items-center mt-[10vh]">
    //   <span className="text-white text-3xl font-semibold text-center p-6 mt-[5vh]">
    //     Find out if you qualify for Energy Rebates?
    //   </span>

    //   <button className="text-black mt-5 p-3 w-[65vh] bg-white rounded-xl hover:bg-green-600 hover:text-white ">
    //     Start
    //   </button>
    // </div>
    <div className="bg-[#31473A] h-[40vh] flex flex-col items-center mt-[10vh]">
      <span className="text-white text-3xl font-semibold text-center p-6 mt-[5vh]">
        Find out if you qualify for Energy Rebates?
      </span>
      {/* Initial Start Screen */}
      {step === 0 && !error && (
        <>
          <button
            onClick={() => setStep(1)}
            className="text-black mt-5 p-3 w-[65vh] bg-white rounded-xl hover:bg-green-600 hover:text-white"
          >
            Start
          </button>
        </>
      )}

      {/* Questions */}
      {step > 0 && step <= questions.length && (
        <div className="flex flex-col items-center justify-center">
          <span className="text-white text-2xl font-medium text-center p-6">
            {questions[step - 1]}
          </span>
          <div className="flex space-x-4">
            <button
              onClick={() => handleResponse("yes")}
              className="text-black mt-5 p-3 w-[25vh] bg-white rounded-xl hover:bg-green-600 hover:text-white"
            >
              Yes
            </button>
            <button
              onClick={() => handleResponse("no")}
              className="text-black mt-5 p-3 w-[25vh] bg-white rounded-xl hover:bg-red-600 hover:text-white"
            >
              No
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex flex-col items-center justify-center">
          <span className="text-red-500 text-xl font-semibold text-center p-6">
            Sorry, you do not qualify for Energy Rebates.
          </span>
          <button
            onClick={() => setError(false)}
            className="text-black mt-5 p-3 w-[25vh] bg-white rounded-xl hover:bg-gray-600 hover:text-white"
          >
            Retry
          </button>
        </div>
      )}

      {/* Completion Message with Two Buttons */}
      {step > questions.length && !error && (
        <div className="flex flex-col items-center justify-center">
          <span className="text-green-500 text-2xl font-semibold text-center p-6">
            Congratulations! You qualify for Energy Rebates!
          </span>
          <div className="flex space-x-4 mt-6">
            <button
              onClick={resetQuestionnaire}
              className="text-black p-3 w-[25vh] bg-white rounded-xl hover:bg-green-600 hover:text-white"
            >
              Start Again
            </button>
            <button
              onClick={bookAppointment}
              className="text-black p-3 w-[25vh] bg-white rounded-xl hover:bg-green-600 hover:text-white"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
