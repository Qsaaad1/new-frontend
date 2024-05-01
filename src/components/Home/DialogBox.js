import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

function DialogBox({ onClose }) {
  const handleClose = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed bottom-20 left-8 z-50 bg-white text-gray-800 shadow-lg rounded-lg w-80 md:w-96 px-4 py-2 overflow-y-auto max-h-80">
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-lg font-semibold mb-2 text-red-500">FAQ</h3>
        <button
          onClick={handleClose}
          className="text-gray-600 hover:text-gray-900"
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="mb-4">
            <h4 className="text-sm md:text-base font-medium mb-1 text-red-500">
              What is the purpose of this website/platform?
            </h4>
            <p className="text-xs md:text-sm text-gray-600">
              This platform aims to help students planning to study abroad by
              providing a direct connection to those with real-world immigration
              and study abroad experiences. It allows you to get informed about
              the ground realities, doubts, and queries that consultants may not
              cover, ensuring you can make well-informed decisions about your
              international education plans
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-sm md:text-base font-medium mb-1 text-red-500">
              Who can use this platform?
            </h4>
            <p className="text-xs md:text-sm text-gray-600">
              This platform is open to students planning to go abroad for
              studies, people considering immigration to settle abroad, as well
              as current international students and immigrants willing to
              volunteer their time to help others by answering questions and
              addressing doubts.
            </p>
          </div>
          <div>
            <h4 className="text-sm md:text-base font-medium mb-1 text-red-500">
              Who will be chatting with?
            </h4>
            <p className="text-xs md:text-sm text-gray-600">
              On our platform, you will have the opportunity to chat with both
              current international students as well as individuals who have
              already completed their education abroad and chosen to immigrate.
              While the majority (over 80%) of our volunteers are currently
              enrolled students, we are actively working to onboard more
              immigrant volunteers to diversify perspectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
