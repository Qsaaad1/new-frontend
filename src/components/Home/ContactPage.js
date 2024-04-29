import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactPage() {
  return (
    <div className="flex justify-center items-center py-8 w-full ">
      <div className="max-w-3xl w-full rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-8">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
          Got a technical issue? Want to send feedback about a This Platform? Need details about our Anything else? Let us know.
          </p>
          <div className="space-y-4">
            <div className="flex items-center bg-gray-100 rounded-lg p-4 transition-opacity duration-500 ease-in-out">
              <EmailIcon className="text-red-500 mr-2" />
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <p className="text-gray-800 text-lg font-medium">
                Info@aspiring-abroad.com
                </p>
              </div>
            </div>
            <div className="flex items-center bg-gray-100 rounded-lg p-4 transition-opacity duration-500 ease-in-out">
              <PhoneIcon className="text-red-500 mr-2" />
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <p className="text-gray-800 text-lg font-medium">+91 82375 90907</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
