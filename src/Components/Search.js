import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearchingCourses, setIsSearchingCourses] = useState(true);

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const fetchResults = async () => {
    const endpoint = isSearchingCourses ? '/search_courses' : '/search_course_sessions';
    const response = await fetch(`${endpoint}?query=${query}`);
    const data = await response.json();
    setResults(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      fetchResults();
    }
  }

  useEffect(() => {
    // no need to fetch here, we use the handleSubmit
  }, [query, isSearchingCourses])

  return (
    <div className="mt-4">
      <h3>Search</h3>
      <Form inline="true" onSubmit={handleSubmit}>
        <div className='row container d-flex justify-content-start mb-3'>
        <FormControl type="text" placeholder="Search..." onChange={handleChange} value={query} className='me-5' style={{width: "320px"}}/>
        <Button type="submit" style={{width: "120px"}}>Search</Button>
        </div>
      </Form>
      <div>
        <label>
          <input
            type="checkbox"
            className='mb-4'
            checked={isSearchingCourses}
            onChange={() => setIsSearchingCourses(!isSearchingCourses)}
          />
          Search for Courses
        </label>
      </div>
      <h5>Results</h5>
      <div>
        {results.map(result => (
          <div key={result.id} className="container mb-4">
            <hr />
            <p>ID: {result.id}</p>
            <p>Name: {result.course_name || result.session_name}</p>
            <p>Description: {result.description || result.brief_desc}</p>
            <Link to={`/courses/${result.id}`} className="btn btn-success">Go to course</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;