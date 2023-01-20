import React from "react";
import StudentNav from "./StudentNav";
import InstructorNav from "./InstructorNav";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  if (user) {
    if (user.role === "student") {
      return <StudentNav setUser={setUser} />;
    } else {
      return <InstructorNav setUser={setUser} />;
    }
  } else {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}>
            V-Tech
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="nav navbar-nav mx-4 ml-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`/login`}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/signUp`}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
