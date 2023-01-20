import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddSession from "./AddSession";
import Header from "./Header";
import Sessions from "./Sessions";

const SingleCourse = ({ user }) => {
  const [course, setCourse] = useState({})
  const [sessions, setSessions] = useState([]);
  const [session, setSession] = useState({
      session_name: "",
      description: "",
      date: "",
      time: "",
      invitation_link: ""
  })

  const { id } = useParams();

  useEffect(() => {
    fetch(`/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourse(data);
        setSessions(data.course_sessions);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSession(Object.assign({}, session, { [e.target.name]: e.target.value }));
    console.log("session:", session);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const course_id = course.id;
    
    fetch(`/course_sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...session, course_id}),
    })
      .then((res) => res.json())
      .then((data) => {
        setSessions({...sessions, data})
        setSession({session_name: '', description: '', date: '', time: '', invitation_link: ''})
      });
  };

  const displayCards = sessions.map((sessions) => (
    <Sessions key={sessions.id} sessions={sessions} />
  ));

  if (user.role === "instructor") {
    return (
      <>
        <Header course={course} sessions={sessions} />
        <div className="container mt-5">
          <div className="collapse" id="collapseExample">
            <AddSession
             handleChange={handleChange}
             handleSubmit={handleSubmit}
             session={session}
            />
          </div>
          <div className="d-flex justify-content-between">
            <h3>Sessions Available</h3>
            <button
              className="btn btn-success"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseExample"
              data-bs-target="#collapseExample"
            >
              Add a session
            </button>
          </div>
          {displayCards}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header course={course} sessions={sessions} />
        <div className="container mt-5">
          <div className="d-flex justify-content-between">
            <h3>Sessions Available</h3>
          </div>
          {displayCards}
        </div>
      </>
    );
  }
};

export default SingleCourse;
