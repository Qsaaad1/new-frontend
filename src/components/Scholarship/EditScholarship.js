import React, { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectRole } from "../../redux/features/auth/authSlice";

export default function EditScholarship() {
  const { id } = useParams(); // Get the scholarship ID from the URL params
  const [name, setName] = useState('');
  const [files, setFiles] = useState('');
  const [funding, setFunding] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [process, setProcess] = useState('');
  const [dates, setDates] = useState('');
  const [requirements, setRequirements] = useState('');
  const [additional, setAdditional] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true); // To show loading indicator while fetching data
  const role = useSelector(selectRole);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchScholarship() {
      try {
        const response = await axios.get(`https://aspiring-abroad.com/api/scholarships/${id}`);
        console.log(response.data);
        const scholarshipData = response.data;
        setName(scholarshipData.name);
        setFunding(scholarshipData.funding);
        setEligibility(scholarshipData.eligibility);
        setProcess(scholarshipData.process);
        setDates(scholarshipData.dates);
        setRequirements(scholarshipData.requirements);
        setAdditional(scholarshipData.additional);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching scholarship data:', error);
      }
    }

    fetchScholarship();
  }, [id]);

  // Check if the user has admin role, if not redirect to a different page
  if (role !== 'admin') {
    return <Navigate to="/" />;
  }

  
  async function updateScholarship(ev) {
    ev.preventDefault();
    const formData = new FormData();
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
      const response = await axios.put(`https://aspiring-abroad.com/api/scholarship/${id}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        setRedirect(true);
      }
    } catch (error) {
      console.error('Error updating scholarship:', error);
      // Handle error here
    }
  }

  async function deleteScholarship() {
    const confirmed = window.confirm("Are you sure you want to delete this Scholarhip?");
    if (!confirmed) {
      return;
    }
    try {
      const response = await axios.delete(`https://aspiring-abroad.com/api/scholarship/${id}`, {
        withCredentials: true
      });
      if (response.status === 200) {
        setRedirect(true);
      }
    } catch (error) {
      console.error('Error deleting scholarship:', error);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="max-w-full mx-auto mt-8 px-12 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Edit Scholarship</h1>
      <form onSubmit={updateScholarship} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additional">
             Information
          </label>
          <textarea
            id="additional"
            placeholder=" Information"
            value={additional}
            onChange={(ev) => setAdditional(ev.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded bg-white resize-none"
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
        
        
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Scholarship
          </button>
          <button
              className="inline-block bg-red-600 text-white py-2 px-4 mx-2 rounded-md text-sm"
              onClick={deleteScholarship}
            >
              Delete
            </button>
        </div>
      </form>
    </div>
  );
}