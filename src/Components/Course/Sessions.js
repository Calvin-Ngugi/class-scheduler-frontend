import React from "react";
import { Link } from "react-router-dom";

const Sessions = ({ sessions }) => {
  return (
    <div className="card mt-2 mb-4 cut">
      <h5 className="card-header">{sessions.session_name}</h5>
      <div className="card-body">
        <h6 className="card-title">Brief description</h6>
        <p className="card-text">{sessions.brief_desc}...</p>
        <p className="card-text">Date: {sessions.date}</p>
        <p className="card-text">From: {sessions.course.course_name} Course</p>
        <Link to={`/course_sessions/${sessions.id}`} className="btn btn-success">
          View
        </Link>
      </div>
    </div>
  );
};

export default Sessions;
