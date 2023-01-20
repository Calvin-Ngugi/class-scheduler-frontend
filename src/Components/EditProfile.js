import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const EditProfileRecord = () => {
  const navigate = useHistory();
  const location = useLocation();
  const { a } = location.state;
  const [formdata, setFormData] = useState({
    First_name: a.First_name,
    Last_name: a.Last_name,
    gender: a.gender,
    bio: a.bio,
    profile_img: a.profile_img,
  });
  function handleChange(e) {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(JSON.stringify(formdata))
    fetch(`/profiles/${a.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Application: "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => navigate("/"))
      .catch(console.error);
  }
  return (
    <div className="studentbackground2">
      <div className="form">
        <h2>Edit Profile Details</h2>
        <div className="container">
          <form id="profile-form" onSubmit={handleSubmit}>
            <label for="fname">First name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formdata.First_name}
              onChange={handleChange}
            />

            <label for="lname">Last name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formdata.Last_name}
              onChange={handleChange}
            />

            <label for="gender">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formdata.gender}
              onChange={handleChange}
            />

            <label for="bio">Biography</label>
            <input
              type="text"
              id="bio"
              name="bio"
              value={formdata.bio}
              onChange={handleChange}
            />

            <label for="profileimage">Profile Image</label>
            <input
              type="text"
              id="profileimage"
              name="email"
              value={formdata.profile_img}
              onChange={handleChange}
            />
            <button id="btn" type="submit">
              Edit Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditProfileRecord;
