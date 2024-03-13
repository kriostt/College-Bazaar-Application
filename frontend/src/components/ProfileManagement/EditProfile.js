import React, { useState } from "react"; // Importing React hooks for managing component state
import { Link } from "react-router-dom"; // Importing Link from React Router for navigation
import "../../App.css";
import ProfileManagement from "./ProfileManagement";

// Edit Profile Page
const EditProfile = () => {
  return (
    <div className="App">
      <h2 className="profile-heading">My Profile</h2>
      <ProfileManagement />
    </div>
  );
};

export default EditProfile;
