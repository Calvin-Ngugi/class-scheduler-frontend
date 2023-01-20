import React from 'react'
import AnnouncementCard from './AnnouncementCard'

const Announcements = ({announcements, user, setAnnouncements}) => {
    const displayCards = announcements.map((ann) => (
        <AnnouncementCard
          key={ann.id}
          announcements={ann}
          user={user}
          setAnnouncements={setAnnouncements}
        />
      ));
  return (
    <div className='container mb-4'>
        <h3 className='mt-3'>Announcements</h3>
        <hr />
        <p className='mx-3'>Check Out The News Boards</p>
        <div>
            {displayCards}
        </div>
    </div>
  )
}

export default Announcements