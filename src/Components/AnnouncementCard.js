import React from "react";

const AnnouncementCard = ({ announcements, user, setAnnouncements}) => {

  function handleDelete() {
    fetch(`/announcements/${announcements.id}`, {
        method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {   
        const delCard = announcements.filter((ann) => ann.id !== announcements.id); 
        setAnnouncements(delCard);
      })
      .catch((error) => console.log('Error from deleteLogsByGlobalId() => ' + error));
  }
  
  if (user.role === "instructor") {
    return (
      <>
        <div className="col cut">
          <div className="card mt-3 box">
            <h5 className="card-header">{announcements.title}</h5>
            <div className="card-body">
              <p className="card-text">{announcements.content}</p>
              <div className="row d-flex justify-content-between">
                <button
                  onClick={() => handleDelete()}
                  className="btn btn-danger mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ width: "100px" }}
                >
                  Delete
                </button>
                </div>
            </div>
          </div>
        </div>
        <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Deleted Announcement
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">You have deleted this announcement.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  } else {
    return(
    <>
      <div className="col cut">
        <div className="card mt-3 box">
          <h5 className="card-header">{announcements.title}</h5>
          <div className="card-body">
            <p className="card-text">{announcements.content}</p>
          </div>
        </div>
      </div>
    </>
    );
  }
};

export default AnnouncementCard;
