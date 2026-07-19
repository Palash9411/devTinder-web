import { useState } from 'react'
import axios from 'axios';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/contants';

const Login = () => {
  const [emailId, setEmailId] = useState("viratkohli@gmail.com");
  const [password, setPassword] = useState("Virat@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleLogin = async (e) => {
  try{
    e.preventDefault();
    const res = await axios.post(BASE_URL + 'login', {
      email: emailId,
      password: password
    }, { withCredentials: true })
    dispatch(addUser(res.data));
    return navigate('/');
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