import React, {useState} from "react";
import { FaThumbsUp, FaTrashAlt } from "react-icons/fa";

function Comments({ comments }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  function handleDelete() {
    fetch(`/comments/${comments.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const delCard = comments.filter((comm) => comm.id !== comments.id);
        setCourses(delCard);
      })
      .catch((error) =>
        console.log("Error from deleteLogsByGlobalId() => " + error)
      );
  }

  const handleClick = () => {
    setIsLiked(true);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card mt-2 mb-4 resize">
          <div className="card-header d-flex justify-content-between">
            <h5 className="card-title mt-1">{comments.user.username}</h5>
            <button
              onClick={() => handleDelete()}
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <FaTrashAlt />
            </button>
          </div>
          <div className="card-body">
            <p className="card-text">{comments.content}</p>
            <div className="d-flex">
              <button className="btn" onClick={() => handleClick()}>
                {isLiked ? (
                  <FaThumbsUp style={{ color: "blue" }} />
                ) : (
                  <FaThumbsUp />
                )}
              </button>
              <p className="card-text mt-2">
                {isLiked ? (
                  "You have liked this comment"
                ): (
                  "Like this comment"
                )
                }
              </p>
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
                Deleted review
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">You have deleted this comment.</div>
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
}

export default Comments;
