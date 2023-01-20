import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Error from "../Components/Error"

function Login({ setUser }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push("/")
      }
      else{
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
     <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h3 className="sign">Login</h3>
              <div className="mb-3 mt-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-success justify-conter-center">
                  Login
                </button>
              </div>
              <div>
                {errors.map((err) => (
                  <Error key={err}>{err}</Error>
                ))}
              </div>
              <p className="mt-3">If you don't have an account, <Link to={`/signup`} className="link" >Sign Up Here</Link></p>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;