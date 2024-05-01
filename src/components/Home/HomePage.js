import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import MainScreen from "./mainScreen";
import Volunteers from "./Volunteers";
import Questions from "./Questions";
import Footer from "./footer";
import DialogButton from "./dialogButton";
import DialogBox from "./DialogBox";
import Graph from "./Graph";
import ContactPage from "./ContactPage";
import wavy from "../../assets/wavy.jpeg";
import TopCountries from "./TopCountries";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  useEffect(() => {
    let intervalId;

    if (showChat) {
      clearInterval(intervalId);
    } else {
      intervalId = setInterval(() => {
        toggleChat();
      }, 1200000); 
    }    
    return () => clearInterval(intervalId);
  }, [showChat]);

  const backgroundImage = {
    backgroundImage: `url(${wavy})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    top: 0,
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Study Abroad Programs - Aspiring Abroad</title>
        <meta
          name="description"
          content="Explore our comprehensive study abroad programs and discover opportunities to pursue your education internationally. Learn about scholarships, application procedures, and more at Aspiring Abroad."
        />
        <meta
          name="keywords"
          content="study abroad,Study abroad programs, international education, scholarships, foreign study, overseas education, Where should I study?, Living expenses in Germany, Living expenses in USA, Living expenses in Uk, Living expenses in Canada, Living expenses in France, Living expenses in Australia"
        />
        <link rel="preload" href={wavy} as="image" />
      </Helmet>

      <MainScreen />
      <Graph />
      <Volunteers />

      <header className="text-center">
        <div className="text-5xl sm:text-9xl font-bold relative bg-gray-200 ">
          <div
            to="/"
            style={backgroundImage}
            className="text-transparent bg-clip-text bg- block py-3 "
          >
            Aspiring Abroad
          </div>
        </div>
      </header>
      
      <Questions />
      <ContactPage />
      <Footer />
      
      {showChat && (
        <div>
          <DialogBox onClose={toggleChat} />
          <DialogButton onClick={toggleChat} />
        </div>
      )}

      {!showChat && <DialogButton onClick={toggleChat} />}
    </div>
  );
}
