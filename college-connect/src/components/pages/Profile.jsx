import React from 'react';

const Profile = () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Check if user data exists
  if (!user) {
    return <div className="alert alert-warning text-center">Please log in to view your profile.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header text-center">
          <h4>User Profile</h4>
        </div>
        <div className="card-body text-center">
          {/* Default Avatar Emoji */}
          <div className="mb-3">
            <span role="img" aria-label="user" style={{ fontSize: '50px' }}>
              👤
            </span>
          </div>
          <h5 className="card-title">{user.username}</h5>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>College Name:</strong> {user.collegename}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
