import React, { useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const EditProfile = ({ user , setIsEditing }) => {
  const [firstName, setFirstName] = useState(user.firstName ||  '');
  const [lastName, setLastName] = useState(user.lastName || '' );
  const [about, setAbout] = useState(user.about || '');
  const [gender, setGender] = useState(user.gender || '');
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl|| '')
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let payload = {};
      if (user.firstName !== firstName) {
        payload.firstName = firstName;
      }
      if (user.lastName !== lastName) {
        payload.lastName = lastName;
      }
      if (user.gender !== gender) {
        payload.gender = gender;
      }
      if (user.about !== about) {
        payload.about = about;
      }
      if (user.photoUrl !== photoUrl) {
        payload.photoUrl = photoUrl;
      }

      if(Object.keys(payload).length) {
        const response=  await axios.patch(`${BASE_URL}profile/edit`, payload, { withCredentials: true });
        console.log(response);
         dispatch(dispatch(addUser(response.data.user)));
        }
        console.log('User updatded successfully ');
        setIsEditing(false);
    } catch (error) {
      console.log('Error updating profile', error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>

          <form onSubmit={handleSubmit}>

            {/* First Name */}
            <fieldset className="fieldset">
              <label className="label">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input outline-none px-3"
                placeholder="First Name"
              />
            </fieldset>

            {/* Last Name */}
            <fieldset className="fieldset ">
              <label className="label">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input outline-none px-3"
                placeholder="Last Name"
              />
            </fieldset>

            {/* About */}
            <fieldset className="fieldset">
              <label className="label">About</label>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="textarea outline-none px-3"
                placeholder="About"
              />
            </fieldset>

            {/* Gender */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>

              <select
                className="select select-bordered outline-none px-3"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled>
                  Pick your gender
                </option>

                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <fieldset className="fieldset">
              <label className="label">PhotoUrl</label>
              <input
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="textarea outline-none px-3"
                placeholder="PhotoUrl"
              />
            </fieldset>
            {/* Submit */}
            <div className="card-actions flex-nowrap justify-center mt-4">
              <button
                className="btn btn-primary w-1/2"
                type="submit"
              >
                Submit
              </button>
              <button
                className="btn btn-secondary w-1/2"
                type="button"
                onClick={()=>setIsEditing(false)}
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;