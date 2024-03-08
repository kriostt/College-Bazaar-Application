import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import img from "../minsi.png";
import "./ProfileManagement.css";

const ProfileManagement = () => {
  // State variables
  const [imageCrop, setImageCrop] = useState(false); // State for image cropping
  const [image, setImage] = useState(""); // State for uploaded image
  const [src, setSrc] = useState(false); // State for image source
  const [profile, setProfile] = useState([]); // State for user profile
  const [preview, setPreview] = useState(false); // State for image preview
  const [errors, setErrors] = useState({}); // State variable for handling form validation errors
  const [profileData, setProfileData] = useState({
    // State for profile data
    username: "alesandrahenriz",
    name: "Alessandra Henriz Vendicacion",
    phoneNumber: "5878776955",
    emailAddress: "ahavendicacion@gmail.com",
  });

  // Function to handle input changes in the form fields
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    const nameRegex = /\d/; // Regular expression to check for presence of digits

    if (nameRegex.test(profileData.name.trim())) {
      // Checking if name contains digits
      errors.name = "This field cannot contain numbers";
    }

    // Setting errors if any validation fails
    if (Object.keys(errors).length > 0) {
      setErrors(errors); // Setting validation errors
      return; // Exit function if there are validation errors
    }
    alert("Profile Data Updated Successfully");
  };

  // Array to store cropped profile images
  const profileFinal = profile.map((item) => item.preview);

  // Function to handle closing of the image preview dialog
  const onClose = () => {
    setPreview(null);
  };

  // Function to handle image cropping
  const onCrop = (view) => {
    setPreview(view);
  };

  // Function to save cropped image
  const saveCropImage = () => {
    setProfile([{ preview }]);
    setImageCrop(false);
  };

  return (
    <div className="profile-management">
      {/* Displaying the current profile picture */}
      <div className="text-center p-4">
        <div className="flex flex-column justify-content-center align-items-center">
          <img
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
            src={profileFinal.length ? profileFinal : img}
            alt=""
          />
          {/* Button to trigger picture editing */}
          <p className="edit-picture" onClick={() => setImageCrop(true)}>
            Edit Picture
          </p>
          {/* Dialog for picture editing */}
          <Dialog visible={imageCrop} onHide={() => setImageCrop(false)}>
            <div className="dialog-content">
              <div className="avatar-container">
                <Avatar
                  width={500}
                  height={400}
                  onCrop={onCrop}
                  onClose={onClose}
                  src={src}
                />
              </div>
              <div className="d-flex flex-column align-items-center mt-4">
                <div className="button-done">
                  {/* Button to confirm picture edit */}
                  <Button
                    onClick={saveCropImage}
                    className="btn btn-outline-secondary btn-md"
                    label="Done"
                  />
                </div>
              </div>
            </div>
          </Dialog>
          {/* Input for uploading new profile picture */}
          <InputText
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file && file.type.substring(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
        </div>
      </div>

      {/* Form for editing profile information */}
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="row mb-4">
          <div className="col-sm-3">
            {/* Label for username */}
            <label className="col-form-label col-form-label-sm me-5">
              Username:
            </label>
          </div>
          <div className="col-sm-9">
            {/* Input for username */}
            <input
              className="form-control form-control-sm"
              type="text"
              id="username"
              name="username"
              value={profileData.username}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* Name */}
        <div className="row mb-4">
          <div className="col-sm-3">
            {/* Label for name */}
            <label className="col-form-label col-form-label-sm me-5">
              Name:
            </label>
          </div>
          <div className="col-sm-9">
            {/* Container for input field and error message */}
            <div style={{ position: "relative" }}>
              {/* Input for name */}
              <input
                className="form-control form-control-sm"
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleInput}
              />
              {/* Error message */}
              {errors.name && (
                <span
                  className="text-danger small"
                  style={{
                    position: "absolute",
                    top: "-1.3rem",
                    left: "0.2rem",
                    fontSize: "11px",
                  }}
                >
                  {errors.name}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="row mb-4">
          <div className="col-sm-3">
            {/* Label for phone */}
            <label className="col-form-label col-form-label-sm me-5">
              Phone:
            </label>
          </div>
          <div className="col-sm-9">
            {/* Input for phone */}
            <input
              className="form-control form-control-sm"
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* Email */}
        <div className="row mb-4">
          <div className="col-sm-3">
            {/* Label for email */}
            <label className="col-form-label col-form-label-sm me-5">
              Email:
            </label>
          </div>
          <div className="col-sm-9">
            {/* Input for email */}
            <input
              className="form-control form-control-sm"
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={profileData.emailAddress}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="row d-flex justify-content-end">
          <div className="col-sm-3">
            <button type="submit" className="btn btn-outline-secondary btn-md">
              Save
            </button>
          </div>
          <div className="col-sm-3  me-3">
            <button type="button" className="btn btn-outline-secondary btn-md">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileManagement;
