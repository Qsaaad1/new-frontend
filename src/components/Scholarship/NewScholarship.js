import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios'; // Import Axios
import { useSelector } from "react-redux";
import { selectRole } from "../../redux/features/auth/authSlice";
import { v4 as uuidv4 } from 'uuid';

export default function ScholarshipPost() {
  const [name, setName] = useState('');
  const [files, setFiles] = useState('');
  const [funding, setFunding] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [process, setProcess] = useState('');
  const [dates, setDates] = useState('');
  const [requirements, setRequirements] = useState('');
  const [additional, setAdditional] = useState('');
  const [redirect, setRedirect] = useState(false);
  const role = useSelector(selectRole);
  
  // Check if the user has admin role, if not redirect to a different page
  if (role !== 'admin') {
      return <Navigate to="/" />; // Assuming you have a login page, change this accordingly
  }
  
  async function createNewScholarship(ev) {
    ev.preventDefault();
    const formData = new FormData();
    formData.append('id', uuidv4());
    formData.append('name', name);
    formData.append('file', files[0]);
    formData.append('funding', funding);
    formData.append('eligibility', eligibility);
    formData.append('process', process);
    formData.append('dates', dates);
    formData.append('requirements', requirements);
    formData.append('additional', additional);
    console.log(formData);
    try {
      const response = await axios.post(`${process.env.REACT_APP_RENDER_URL}/scholarship`, formData, {
        withCredentials: true, // Ensure credentials are included
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.status === 200) {
        setRedirect(true);
      }
    } catch (error) {
      console.error('Error creating scholarship:', error);
      // Handle error here
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="max-w-full mx-auto mt-8 px-12 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Create Scholarship</h1>
      <form onSubmit={createNewScholarship} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded bg-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
            Photo
          </label>
          <input
            id="file"
            type="file"
            onChange={(ev) => setFiles(ev.target.files)}
            className="mb-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="funding">
            Funding
          </label>
          <input
            id="funding"
            type="text"
            placeholder="Funding"
            value={funding}
            onChange={(ev) => setFunding(ev.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded bg-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eligibility">
            Eligibility
          </label>
          <textarea
            id="eligibility"
            placeholder="Eligibility"
            value={eligibility}
            onChange={(ev) => setEligibility(ev.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded bg-white resize-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="process">
            Process
          </label>
          <textarea
            id="process"
            placeholder="Process"
            value={process}
            onChange={(ev) => setProcess(ev.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded bg-white resize-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dates">
            Dates
          </label>
          <input
            id="dates"
            type="date"
            placeholder="Dates"
            value={dates}
            onChange={(ev) => setDates(ev.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded bg-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirements">
            Requirements
          </label>
          <textarea
            id="requirements"
            placeholder="Requirements"
            value={requirements}
            onChange={(ev) => setRequirements(ev.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded bg-white resize-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additional">
            Additional Information
          </label>
          <textarea
            id="additional"
            placeholder="Additional Information"
            value={additional}
            onChange={(ev) => setAdditional(ev.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded bg-white resize-none"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Scholarship
          </button>
        </div>
      </form>
    </div>
  );
}
