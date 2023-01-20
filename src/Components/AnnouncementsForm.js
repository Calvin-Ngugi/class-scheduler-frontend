import React, { useState } from "react";

const AnnouncementForm = ({ announcements, setAnnouncements }) => {
  const [announcementForm, setAnnouncementForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setAnnouncementForm({
      ...announcementForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`/announcements`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(announcementForm),
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = [...announcements, data];
        setAnnouncements(newData);
        console.log(newData);
      });
    e.target.reset();
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="style mt-3 pb-5">
        <div className="row d-flex justify-content-center mt-4 mb-3">
        <h2 className="mt-5 text-center">
          <b>Add an Announcement</b>
        </h2>
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center">Announcement Form</h4>
              <div className="mb-3">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={announcementForm.title}
                  placeholder="Enter the announcement title"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="content"
                  value={announcementForm.content}
                  placeholder="Enter the message"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementForm;
