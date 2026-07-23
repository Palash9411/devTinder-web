export const UserCard = ({ user }) => {
console.log("UserCard user:", user);
  return (
    
    user ? (
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img
            src={user.photoUrl}
            alt={user.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
    <p>{user.about}</p>
    {user.age && user.gender && (
      <p>
        Age: {user.age} | Gender: {user.gender}
      </p>
    )}
    <div className="card-actions justify-center mt-4">
      <button className="btn btn-primary w-40">Interested</button>
      <button className="btn btn-secondary w-40">Ignore</button>
    </div>
  </div>
</div>
   ) : (
   <div>No User Found</div>
   )
  )
}
