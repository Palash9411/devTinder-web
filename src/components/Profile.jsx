import { useState } from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);

  if (!user) return null;

  return (
    <div className="flex justify-center my-10">

      {isEditing ? (
        <EditProfile
          user={user}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">

            <h2 className="card-title">
              <strong>Name:</strong>  {user.firstName} {user.lastName}
            </h2>

            <p><strong>About:</strong> {user.about}</p>

            <p>
              <strong>Gender:</strong> {user.gender}
            </p>

            <p >
              <strong >Photo URL:</strong> 
              <span className="break-words" >{user.photoUrl}</span>
            </p>

            <button
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;