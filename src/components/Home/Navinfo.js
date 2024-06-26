import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

function Navinfo() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  // Example company information
  const companyEmail = "Info@aspiring-abroad.com";

  return (
    <nav className="justify-between bg-gray-100 border border-gray-900 text-gray-800 p-2 hidden sm:flex my-auto">
      <div className="mx-10 my-auto">
        <div className="flex gap-4 text-sm text-gray-600">
          <span><EmailIcon className="text-red-500"/>: <a href={`mailto:${companyEmail}`} className="hover:text-red-500 hover:underline ">{companyEmail}</a></span>
        </div>
      </div>
      <div className="flex flex-row mx-10">
        <ul className="flex gap-2 text-sm text-gray-600">
          
          <li>
            <Link to="/blogs" className="hover:text-red-500">
              Blog
            </Link>
            <p className="text-red-500 inline"> /</p>
          </li>
          <li>
            <Link to="/community" className="hover:text-red-500">
              Community
            </Link>
            <p className="text-red-500 inline"> /</p>
          </li>
          <li>
            <Link to="/" onClick={scrollToBottom} className="hover:text-red-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navinfo;
