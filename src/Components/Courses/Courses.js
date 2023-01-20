import React from 'react'
import Search from '../Search';
import CourseCard from './CourseCard'

const Courses = ({courses, user, setCourses}) => {
    const displayCards = courses.map((courses) => (
        <CourseCard
          key={courses.id}
          courses={courses}
          user={user}
          setCourses={setCourses}
        />
      ));
  return (
    <div className='container mb-4'>
      <Search/>
        <h3 className='mt-3'>List of Courses</h3>
        <hr />
        <p className='mx-3'>Check out our courses</p>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 g-4'>
            {displayCards}
        </div>
    </div>
  )
}

export default Courses