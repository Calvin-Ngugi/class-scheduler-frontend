import React from 'react'

const Header = ({course, sessions}) => {
  return (
    <div className='container'>
        <h2 className='mt-3'>{course.course_name}</h2>
        <p>{course.description}</p>
        <span className="session-count">There is {sessions ? sessions.length : 0} sessions in this program</span> 
    </div>
  )
}

export default Header