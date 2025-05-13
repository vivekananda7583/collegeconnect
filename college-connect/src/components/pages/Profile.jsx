import React from "react";
import { USER_API_END_POINT } from "../../utils/constant";

const Profile = () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const [isEditing, setIsEditing] = React.useState(false);
  console.log(user);

  // Check if user data exists
  if (!user) {
    return (
      <div className="alert alert-warning text-center">
        Please log in to view your profile.
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try{
      const updatedUser = {
        username: e.target.username.value,
        email: e.target.email.value,
        collegename: user.collegename, // Assuming college name doesn't change
      };

      const response = await fetch(`${USER_API_END_POINT}/update-user/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        // User data updated successfully
        const updatedUserData = await response.json();
        // Update user data in localStorage
        localStorage.setItem("user", JSON.stringify(updatedUserData));
        // Update state to reflect changes
        }

    }
    catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="container mt-5">
      {!isEditing && (
        <div className="card shadow-sm">
          <div className="card-header text-center">
            <h4>User Profile</h4>
          </div>
          <div className="card-body text-center">
            {/* Default Avatar Emoji */}
            <div className="mb-3">
              <span role="img" aria-label="user" style={{ fontSize: "50px" }}>
                👤
              </span>
            </div>
            <h5 className="card-title">{user.username}</h5>
            <p className="card-text">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="card-text">
              <strong>College Name:</strong> {user.collegename}
            </p>
          </div>
          <button
            className="btn btn-primary m-3"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      )}
      {isEditing && (
        <div className="card shadow-sm mt-3">
          <div className="card-header text-center">
            <h4>Edit Profile</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={(e) => (user.username = e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(e) => (user.email = e.target.value)}
                  value={user.email}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="collegename">College Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="collegename"
                  value={user.collegename}
                  onChange={(e) => (user.collegename = e.target.value)}
                  placeholder="Enter your college name"
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
