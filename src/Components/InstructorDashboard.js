import React from "react";
import Courses from "./Courses/Courses";

const InstructorDashboard = ({ user, courses, setCourses }) => {
  return (
    <>
    <div
      id="carouselExampleCaptions"
      className="carousel slide container mt-1"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="7000">
          <img src="./images/andrew.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4>Welcome {user.username}</h4>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="7000">
          <img src="./images/female_instructor.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4>Instructor Dashboard</h4>
            <p>As an instructor we have given you the special rights to be able to properly handle the students</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="7000">
          <img src="./images/scott-graham.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h4>Third slide label</h4>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <Courses 
      courses={courses}
      user={user}
      setCourses={setCourses}  
    />
    </>
  );
};

export default InstructorDashboard;
