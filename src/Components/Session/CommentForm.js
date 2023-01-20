import React from 'react'

const CommentForm = ({handleChange, handleSubmit, comment}) => {
  return (
    <div className="d-flex justify-content-center mt-4 mb-3">
          <div className="col-md-5">
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  name="content"
                  placeholder="Write us a comment"
                  value={comment.content}
                  onChange={handleChange}
                />
              <div className='d-flex justify-content-center mt-2'>
                <button type="submit" className="btn btn-primary"> 
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default CommentForm