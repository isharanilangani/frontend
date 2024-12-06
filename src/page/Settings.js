import React, { useState } from "react";
import "./Settings.css"; 

function Settings() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Profile Picture:", profilePicture);
  };

  return (
    <div className="settings-container">
      {/* Main Content */}
      <main className="settings-main">
        <h1>Settings</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="profile-picture">
              <input
                type="file"
                id="profile-picture"
                accept="image/*"
                onChange={handleProfilePictureChange}
              />
              <div className="camera-icon">
                <i className="fa fa-camera"></i>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="username">Change Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter new username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Change Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
}

export default Settings;
