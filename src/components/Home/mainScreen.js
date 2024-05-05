import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainScreen() {
  const imagesWithText = [
    {
      imageUrl: "page-2.png",
      heading: "Talk to students before going abroad and then take a call",
      text1: "BE A PART OF THE BIGGEST COMMUNITY",
      text2: "OF INTERNATIONAL STUDENTS",
      isStudentButtonVisible: false,
      isVolunteerButtonVisible: true,
    },
    {
      imageUrl: "image.png",
      heading: "",
      text1: "Lead a hand to make this world a",
      text2: "better place",
      isStudentButtonVisible: true,
      isVolunteerButtonVisible: false,
    },
    // Add more objects for additional images and text
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imagesWithText.length
      );
    }, 10000); // Interval for changing images every 10 seconds

    return () => clearInterval(interval);
  }, [imagesWithText.length]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative flex items-center justify-center h-[60vh] sm:h-[80vh] ">
      <div className="absolute inset-0 opacity-40" />
      {imagesWithText.map((item, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-200 ease-in-out"
          style={{
            opacity: index === currentImageIndex ? "1" : "0",
            transition: "opacity 2s ease-in-out",
            transitionDelay: index === currentImageIndex ? "0.5s" : "0s",
            zIndex: index === currentImageIndex ? "1" : "0", // Set zIndex based on currentImageIndex
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center 5%", // Position 10% from the top
              height: "100%",
              width: "100%",
            }}
          />
          <div className="flex transform justify-center text-white font-bold text-3xl">
            <div className="flex flex-col font-mono mx-10 px-4 py-2 rounded-lg text-white text-xl md:text-3xl lg:text-4xl text-center">
              {item.heading ? (
                <div>
                  <h2 className="sm:text-3xl font-bold  px-4 text-sm p-1 mt-10 ">
                    {item.heading}
                  </h2>{" "}
                  <hr className="mt-4" />
                </div>
              ) : (
                <div>
                  <h1 className="p-1 mt-12"></h1>
                </div>
              )}
              <p className="align-center mt-32 text-sm sm:text-3xl">
                {item.text1}
              </p>
              <p className="text-sm sm:text-3xl">{item.text2}</p>
              <div className="relative z-10 mt-4">
                {item.isStudentButtonVisible && (
                  <Link to="/registervolunteer">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-red-700 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300   rounded-lg text-sm sm:text-base  px-4 py-2  sm:px-5 sm:py-2.5  text-center me-2 mb-2"
                    >
                      Register as a Volunteer
                    </button>
                  </Link>
                )}
                {item.isVolunteerButtonVisible && (
                  <Link to="/community">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-red-700 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300   rounded-lg text-sm sm:text-base  px-4 py-2  sm:px-5 sm:py-2.5  text-center me-2 mb-2"
                    >
                      Talk to students
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 right-0 flex space-x-2 mb-4 mr-4 z-20">
        {imagesWithText.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default MainScreen;
