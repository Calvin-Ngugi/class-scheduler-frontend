import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courses, user , setCourses}) => {

  function handleDelete() {
    fetch(`/courses/${courses.id}`, {
        method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {   
        const delCard = course.filter((course) => course.id !== courses.id); 
        setCourses(delCard);
      })
      .catch((error) => console.log('Error from deleteLogsByGlobalId() => ' + error));
  }
  
  if (user.role === "instructor") {
    return (
      <>
        <div className="col">
          <div className="card mt-3 box">
            <h5 className="card-header">{courses.course_name}</h5>
            <div className="card-body">
              <h5 className="card-title">{courses.name}</h5>
              <p className="card-text">{courses.description}</p>
              <div className="row d-flex justify-content-between">
                <Link to={`courses/${courses.id}`} className="btn btn-primary ms-2" style={{ width: "115px" }}>
                  Read More...
                </Link>
                <button
                  onClick={() => handleDelete()}
                  className="btn btn-danger mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ width: "100px" }}
                >
                  Delete
                </button>
                </div>
            </div>
          </div>
        </div>
        <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Deleted course
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">You have deleted this course. Refresh page to see changes.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  } else {
    return(
    <>
      <div className="col">
        <div className="card mt-3 box">
          <h5 className="card-header">{courses.course_name}</h5>
          <div className="card-body">
            <h5 className="card-title">{courses.name}</h5>
            <p className="card-text">{courses.description}</p>
            <Link to={`courses/${courses.id}`} className="btn btn-primary">
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </>
    );
  }
};

export default CourseCard;
