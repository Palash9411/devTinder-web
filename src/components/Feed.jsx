import axios from 'axios';
import { BASE_URL } from '../utils/contants';
import { addFeed } from '../utils/feedSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from './UserCard';

export const Feed = () => {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const getFeedData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}feed`, { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.error("Error fetching feed data:", error);
    }
  };
  useEffect(() => {
    if(!feed) getFeedData();
  }, [feed]);
  return (

    <div className="flex flex-wrap gap-4 justify-center my-10">
      {feed && (
        <UserCard key={feed.userList[0]._id} user={feed.userList[0]} />
      )}
    </div>
  )
}
