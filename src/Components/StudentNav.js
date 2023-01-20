import React from "react";
import { Link, useHistory } from "react-router-dom";

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
            <li className="nav-item ms-3">
              <Link
                className="nav-link active"
                aria-current="page"
                to={`/Courses`}
              >
                Courses
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to={`/announcements`}>
                Announcements
              </Link>
            </li>
            <li className="nav-item dropdown justify-content-end ms-3">
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
