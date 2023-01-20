import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Error from "../Components/Error"

function SignUp({ setUser }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      } 
    });
  }

  return (
    <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h3 className="sign">Sign Up</h3>
              <div className="mb-3 mt-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
              <label htmlFor="username">Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password_confirmation"
                  name="password_confirmation"
                  required
                  placeholder="Enter password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password Confirmation</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter password"
                  autoComplete="current-password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-success justify-conter-center">
                  Sign Up
                </button>
              </div>
              <div>
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
              </div>
              <p className="mt-3">If you already have an account, <Link to={`/login`} className="link" >Login Here</Link></p>
            </form>
          </div>
        </div>
      </div>
  );
}

export default SignUp;