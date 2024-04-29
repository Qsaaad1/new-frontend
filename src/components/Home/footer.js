import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white">
      <div className="container flex  flex-col justify-center items-center pt-3 pb-3">
        <section className="flex space-x-4">
          <a
            href="https://chat.whatsapp.com/Gq6loN274u83YMgbrNj59E"
            className="social-icon transition-colors duration-300 hover:text-red-500"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC33E27oPtODFkwlNIL53lTg"
            className="social-icon transition-colors duration-300 hover:text-red-500"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/aspiring_abroad?igsh=MXF2Y2p4Z2tnbmh1OA=="
            className="social-icon transition-colors duration-300 hover:text-red-500"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-shah-98248b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="social-icon transition-colors duration-300 hover:text-red-500"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </section>
        <p className="text-xs mt-1 pt-1"> 
          We are new and boot strapped please follow us to show your support.
        </p>
      </div>

      <div className="py-4 text-center bg-gray-900">
        <p>
          &copy; {new Date().getFullYear()} Aspiring Abroad. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
