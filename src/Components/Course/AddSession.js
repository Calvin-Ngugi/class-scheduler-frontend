import React from 'react'

const AddSession = ({session, handleSubmit, handleChange}) => {
  return (
    <div className="container mb-4">
        <div className="row d-flex justify-content-start">
          <div className="col-md-4">
            <h3>Add a Session</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="session_name">Session Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="session_name"
                  required
                  autoComplete="off"
                  placeholder="Enter The Session Name"
                  value={session.session_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
              <label htmlFor="session_description">Session Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  required
                  autoComplete="off"
                  placeholder="Enter The Description"
                  value={session.description}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
              <label htmlFor="date">Date</label>
                <input
                  type="date"
                  data-date-format="yyyy/mm/dd"
                  className="form-control date-picker"
                  name="date"
                  required
                  autoComplete="off"
                  value={session.date}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
              <label htmlFor="time">Time</label>
                <input
                  type="text"
                  className="form-control"
                  name="time"
                  required
                  autoComplete="off"
                  placeholder="Enter The Duration"
                  value={session.time}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
              <label htmlFor="invitation_link">Invitation Link</label>
                <input
                  type="text"
                  className="form-control"
                  name="invitation_link"
                  required
                  autoComplete="off"
                  placeholder="Enter The Invitation Link"
                  value={session.invitation_link}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-success justify-conter-center">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default AddSession