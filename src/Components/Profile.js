import React from 'react'
import ProfileDetails from './ProfileDetails'

const Profile = ({profile}) => {
    const display = profile.map((profile) =>(
        <ProfileDetails
            key={profile.id} 
            profile={profile}
        />
    ))
  return (
    <div className='mt-3 container'>
        <h2>Profiles of users in the system</h2>
        {display}
    </div>
  )
}

export default Profile