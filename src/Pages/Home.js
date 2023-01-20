import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import InstructorDashboard from "../Components/InstructorDashboard";
import StudentDashboard from "../Components/StudentDashboard";


const Home = ({ user, setUser, courses, setCourses }) => {

  if (user) {
    if (user.role === "instructor") {
      return (
      <InstructorDashboard
        user={user}
        setCourses={setCourses}
        courses={courses}/>
      );
    } else {
      return (
      <StudentDashboard 
        user={user}
        setCourses={setCourses}
        courses={courses}/>
      );
    }
  } else {
    return (
      
      <div className="container">
       
        <h3>Please Login or SignUp to continue...</h3>
        <Link to={`/login`} className="link">
          Login
        </Link>
      </div>
    );
  }
};

export default Home;
