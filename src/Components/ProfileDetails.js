import React from "react";

const ProfileDetails = ({ profile }) => {
  return (
    <div>
      <hr />
      <div className="d-flex justify-content-between">
        <div className="ms-3">
          <h3>{profile.user.username}</h3>
          <div className="d-flex">
            <h5 className="me-2">Name: {profile.First_name}</h5>
            <h5>{profile.Last_name}</h5>
          </div>
          <p>Gender: {profile.gender}</p>
          <p>Bio: {profile.bio}</p>
          <p>Role: {profile.user.role}</p>
        </div>
        <img
          className="prof me-5"
          src={profile.profile_img}
          alt="profile image"
        ></img>
      </div>
    </div>
  );
};

export default ProfileDetails;
