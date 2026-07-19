
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';
import Footer from './Footer';
import { BASE_URL } from '../utils/contants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser} from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';



const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const fetchUser = async () => {
    if(user)  return ;
      try {
        const response = await axios.get(`${BASE_URL}profile/view`, { withCredentials: true });
        dispatch(addUser(response.data));
      } catch (error) {
        if(error.response.status === 401) {
        navigate('/login');
      }
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {

      fetchUser();
    }, []);


  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body