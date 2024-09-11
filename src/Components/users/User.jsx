import "./User.css"

export const User = ({user}) => {
  return (
    <div className="user">
      <div>
        <div>
          <div>Name</div>
          <div>{user.fullName}</div>
        </div>
        <div>
          <div>Email</div>
          <div>{user.email}</div>
        </div>
      </div>
    </div>
  );
};
