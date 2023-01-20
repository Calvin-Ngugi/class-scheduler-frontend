import React from 'react'
import Courses from "./Courses/Courses";

const StudentDashboard = ({user, courses, setCourses}) => {
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
          <img src="./images/team_work.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4>Welcome {user.username}</h4>
            <p>This is the student dashboard.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="7000">
          <img src="./images/graduates.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4>Academic excellence</h4>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item"data-bs-interval="7000">
          <img src="./images/moringa-students.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h4>Team work</h4>
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
  )
}

export default StudentDashboard