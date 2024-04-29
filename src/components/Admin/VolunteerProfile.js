import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function VolunteerProfile() {
  const location = useLocation();
  const { First_Name, Last_Name, Gender, Countrie, Citie, University_Name} = location.state;
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>User Profile - Aspiring Abroad</title>
        <meta
          name="description"
          content="View and manage your user profile details on Aspiring Abroad. Access your username, full name, email, phone number, and pincode information."
        />
        <meta
          name="keywords"
          content="user profile, account details, personal information, username, full name, email, phone number, pincode, user management"
        />
        {/* Add other meta tags as needed */}
      </Helmet>

      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <label htmlFor="FirstName" className="block text-gray-700 font-bold mb-2">
          First Name
          </label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            value={First_Name}
            readOnly
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="p-4">
          <label htmlFor="LastName" className="block text-gray-700 font-bold mb-2">
          Last Name
          </label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={Last_Name}
            readOnly
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="p-4">
          <label htmlFor="Gender" className="block text-gray-700 font-bold mb-2">
          Gender
          </label>
          <input
            type="text"
            id="Gender"
            name="Gender"
            value={Gender}
            readOnly
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="p-4">
          <label
            htmlFor="Countrie"
            className="block text-gray-700 font-bold mb-2"
          >
            Countrie
          </label>
          <input
            type="text"
            id="Countrie"
            name="Countrie"
            value={Countrie}
            readOnly
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="p-4">
          <label
            htmlFor="Citie"
            className="block text-gray-700 font-bold mb-2"
          >
             Citie
          </label>
          <input
            type="text"
            id="Citie"
            name="Citie"
            value={Citie}
            readOnly
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="p-4">
          <label
            htmlFor="UniversityName"
            className="block text-gray-700 font-bold mb-2"
          >
            University Name
          </label>
          <input
            type="text"
            id="UniversityName"
            name="UniversityName"
            value={University_Name}
            readOnly
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </div>
  );
}

export default VolunteerProfile;
