import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from '../utils/userSlice';
import { BASE_URL } from "../utils/contants";
const NavBar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
       const response = await axios.post(`${BASE_URL}logout`, {}, { withCredentials: true });
       if (response.status === 200) {
          dispatch(deleteUser());
         return navigate("/login");
       } else {
          console.error("Logout failed:", response.statusText);
       }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const navigateToProfile = () =>{
    return navigate('/profile');
  }
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">🧑🏼‍💻 DevTinder</Link>
      </div>

      {user && (
        <div className="flex items-center gap-3">
          <span className="font-semibold">
            Welcome, {user.firstName} {user.lastName}
          </span>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user.photoUrl}
                />
              </div>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link onClick={navigateToProfile} to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link onClick={handleLogout} to="/logout">Logout</Link>
              </li>
            </ul>
          </div>

        </div>
      )}
    </div>
  );
};

export default NavBar;