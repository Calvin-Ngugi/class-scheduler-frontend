import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sessions from '../Components/Course/Sessions';

function AllSessions() {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/course_sessions')
      .then(response => response.json())
      .then(data => {
        console.log("Data is ",data);
        setSessions(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const displayCards = sessions.map((sessions) =>(
    <Sessions 
      key={sessions.id}
      sessions={sessions}
    />
  ));

  return (
    <div className="col">
      {isLoading ? (
        <div className='container text-color-success'>Loading...</div>
      ) : (
        <div className='container mt-5'>
          {displayCards}
        </div>
      )}
    </div>
  );
}

export default AllSessions;