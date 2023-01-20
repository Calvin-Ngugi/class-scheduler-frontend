import React from "react";
import { Link, useHistory } from "react-router-dom";
import Search from "./Search";

const StudentNav = ({ setUser }) => {
  const history = useHistory();
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    history.push("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand me-5" to={`/`}>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown ms-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={`/courses`}>
                    All courses
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to={`/add_course`}>
                    Add Courses
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ms-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Announcements
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={`/announcements`}>
                    All Announcements
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to={`/announcement_form`}>
                    Add an Announcement
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ms-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sessions
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={`/course_sessions`}>
                    All Sessions
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ms-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={`/Profile`}>
                    Profiles
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/add_profile`}>
                    Add Profile details
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StudentNav;
