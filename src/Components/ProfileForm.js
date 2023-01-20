import React, { useState } from "react";
import "../Css/ProfileForm.css";

const ProfileForm = ({user, profile, setProfile}) => {
  const [formdata, setFormData] = useState({
    First_name: "",
    Last_name: "",
    gender: "",
    bio: ""
  });

  function handleChange(e) {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const user_id = user.id;

    fetch("/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Application: "application/json",
      },
      body: JSON.stringify({...formdata, user_id}),
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile({...profile, data})
      })
      .catch(console.error);
      e.target.reset();
  }
  return (
    <div className="profilebackground">
      <div className="form">
        <h2>Create User Profile</h2>
        <div className="containerr">
          <form id="profile-form" onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="First_name"
              value={formdata.First_name}
              onChange={handleChange}
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="Last_name"
              value={formdata.Last_name}
              onChange={handleChange}
            />
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formdata.gender}
              onChange={handleChange}
            />
            <label htmlFor="bio">Biography</label>
            <input
              type="text"
              id="bio"
              name="bio"
              value={formdata.bio}
              onChange={handleChange}
            />
            <label htmlFor="profile_img">Profile image address</label>
            <input
              type="text"
              id="profile_img"
              name="profile_img"
              value={formdata.profile_img}
              onChange={handleChange}
            />
            <button id="btn" type="submit">
              Create User Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
