import { useState } from 'react'
import axios from 'axios';

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = (e) => {
  try{
    e.preventDefault();
    axios.post('http://localhost:3000/login', {
      email: emailId,
      password: password
    }, { withCredentials: true })
  } catch (error) {
    console.error("Login failed:", error);
  }
};

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label" htmlFor="email">Email*</label>
              <input type="email" id="email" value={emailId} required onChange={(e) => setEmailId(e.target.value)} className="input validator outline-none" placeholder="Email" />
              <p className="validator-hint">
                Enter a valid email address.
              </p>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="password">Password*</label>
              <input type="password" id="password" value={password} required onChange={(e) => setPassword(e.target.value)} className="input validator outline-none" placeholder="Password" />
              <p className="validator-hint">
                Enter a valid password.
              </p>
            </fieldset>
            <div className="card-actions justify-center">
            <button className="btn btn-primary w-1/2  " type="submit">Login</button>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login