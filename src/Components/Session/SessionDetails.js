import React from 'react'

function SessionDetails({session}) {
  return (
    <div className='container mt-4'>
        <h3>{session.session_name}</h3>
        <p className='mt-3'>{session.description}</p>
        <p>Date: {session.date}</p>
        <p>Duration: {session.time}</p>
        <p>Invite link: <a href={session.invitation_link}>{session.invitation_link}</a></p>
    </div>
  )
}

export default SessionDetails