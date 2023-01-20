import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import SessionDetails from "./SessionDetails";

const Session = ({user}) => {
  const [session, setSession] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    content: ""
  });
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/course_sessions/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSession(data);
        setComments(data.comments);
        setLoading(true)
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setComment(Object.assign({}, comment, { [e.target.name]: e.target.value }));
    console.log("comment:", comment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const course_session_id = session.id;
    const user_id = user.id;
    
    fetch(`/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...comment, course_session_id, user_id}),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments({...comments, data})
        setComment({content: ''})
      });
  };


  let userComments

  if(loading && session.comments){
    userComments = comments.map((comm) =>{
      return (
        <Comments
          key={comm.id}
          comments={comm}
        />
      )
    })
  }

  return (
    <>
      <SessionDetails session={session} />
      <h3 className="text-center mt-5 mb-3">Share with us your reviews</h3>
      <CommentForm handleChange={handleChange} handleSubmit={handleSubmit} comment={comment}/>
        {userComments}
    </>
  );
};

export default Session;
