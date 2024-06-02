import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ScholarshipPage() {
  const { id } = useParams();
  const [scholarshipData, setScholarshipData] = useState(null);

  useEffect(() => {
    const fetchScholarship = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_RENDER_URL}/scholarships/${id}`
        );
        setScholarshipData(response.data);
      } catch (error) {
        console.error("Error fetching scholarship:", error);
      }
    };

    fetchScholarship();
  }, [id]);

  const renderFormattedText = (text) => {
    return text.split("\n").map((str, index) => (
      <p key={index} className="mb-2">
        {str}
      </p>
    ));
  };

  const renderList = (text) => {
    return (
      <ul className="list-disc pl-5">
        {text.split("\n").map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {scholarshipData ? (
        <>
          <h1 className="text-3xl font-semibold mb-4">
            {scholarshipData.name}
          </h1>
          <div className="max-w-full mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={scholarshipData.photo}
                alt={scholarshipData.name}
                className="w-full h-64 object-contain "
              />
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Information</h2>
                {renderFormattedText(scholarshipData.additional)}
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Funding</h2>
                {renderFormattedText(scholarshipData.funding)}
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Eligibility</h2>
                {renderFormattedText(scholarshipData.eligibility)}
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Process</h2>
                {renderFormattedText(scholarshipData.process)}
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Dates</h2>
                {renderFormattedText(scholarshipData.dates)}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ScholarshipPage;
