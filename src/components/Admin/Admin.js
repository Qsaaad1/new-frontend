import React from "react";
import { Link, Navigate } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { selectRole } from "../../redux/features/auth/authSlice";

const Box = (props) => {
  return (
    <div className=" bg-slate-800 w-48 h-48 m-4 flex items-center justify-center rounded-lg sm:h-64 sm:w-64">
      <p className="text-white">{props.name}</p>
    </div>
  );
};

const Admin = () => {
  const role = useSelector(selectRole);
  if (role !== "admin") {
    return <Navigate to="/" />; 
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-10  sm:flex-row">
        <Link to="/admin-scholarship" className="flex flex-wrap justify-center">
          <Box name="Scholarship" />
        </Link>
        <Link to="/admin-chats" className="flex flex-wrap justify-center">
          <Box name="Chats" />
        </Link>
        <Link to="/admin-blogs" className="flex flex-wrap justify-center">
          <Box name="Blog" />
        </Link>
      </div>
      <div className="flex flex-col justify-center  sm:flex-row">
        <Link to="/admin-students" className="flex flex-wrap justify-center">
          <Box name="Students" />
        </Link>
        <Link to="/admin-volunteers" className="flex flex-wrap justify-center">
          <Box name="Volunteers" />
        </Link>
      </div>
    </>
  );
};

export default Admin;
