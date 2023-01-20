import React, { useState } from "react";
import "../Css/CourseForm.css";

const CourseForm = ({courses, setCourses}) => {
  const [formdata, setFormData] = useState({
    course_name: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    // console.log(JSON.stringify(formdata))
    fetch("/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Application: "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = [...courses, data]
        setCourses(newData)
        console.log(newData)
      })
      .catch(console.error);
      e.target.reset();
  }
  return (
    <div className="coursebackground">
      <div className="form">
        <h2>Create New Course</h2>
        <div className="containerr">
          <form id="course-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Course name</label>
            <input
              type="text"
              id="name"
              name="course_name"
              value={formdata.course_name}
              onChange={handleChange}
            />

            <label htmlFor="name">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formdata.description}
              onChange={handleChange}
            />
            <button id="btn" type="submit">
              Register Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CourseForm;
