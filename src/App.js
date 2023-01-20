import React, { useEffect, useState } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import SignUp from "./Pages/signUp";
import Login from "./Pages/login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import SingleCourse from "./Components/Course/SingleCourse";
import Session from "./Components/Session/Session";
import CourseForm from "./Components/CourseForm";
import AllSessions from "./Pages/AllSessions";
import Courses from "./Components/Courses/Courses";
import ProfileForm from "./Components/ProfileForm";
import Announcements from "./Components/Announcements";
import AnnouncementForm from "./Components/AnnouncementsForm";
import Profile from "./Components/Profile";


const App = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([])
  const [profile, setProfile] = useState([])
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch(`/courses`)
      .then((res) => res.json())
      .then((course) => {
        setCourses(course);
      });
  }, []);

  useEffect(() => {
    fetch(`/announcements`)
      .then((res) => res.json())
      .then((ann) => {
        setAnnouncements(ann);
      });
  }, []);

  useEffect(() => {
    fetch(`/profiles`)
    .then((res) => res.json())
    .then((prof) => {
      setProfile(prof);
    });
  }, []);

  return (
    <main>
      <Navbar setUser={setUser} user={user}/>
      {user ?(
        <Switch>
          <Route exact path="/">
            <Home 
            setUser={setUser}
            user={user}
            courses={courses}
            setCourses={setCourses}
            />
          </Route>
          <Route path="/courses/:id">
            <SingleCourse user={user}/>
          </Route>
          <Route exact path="/course_sessions">
            <AllSessions/>
          </Route>
          <Route path="/course_sessions/:id">
            <Session user={user}/>
          </Route>
          <Route path="/add_course">
            <CourseForm 
              courses={courses}
              setCourses={setCourses}
            />
          </Route>
          <Route path="/courses">
            <Courses 
            courses={courses}
            setCourses={setCourses}
            user={user}
            />
          </Route>
          <Route path="/add_profile">
            <ProfileForm 
              user={user} 
              profile={profile} 
              setProfile={setProfile}/>
          </Route>
          <Route path="/profile">
            <Profile
              key={profile.id}
              profile={profile}
            />
          </Route>
          <Route path="/announcements">
            <Announcements 
            user={user}
            announcements={announcements}
            setAnnouncements={setAnnouncements}
            />
          </Route>
          <Route path="/announcement_form">
            <AnnouncementForm 
              announcements={announcements}
              setAnnouncements={setAnnouncements}
            />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUp 
            setUser={setUser}
            />
          </Route>
          <Route path="/login">
            <Login 
            setUser={setUser} 
            />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      )
    }
    </main>
  )
}

export default App