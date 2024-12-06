import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate(); 

  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <h1>Welcome to the Dashboard</h1>
        <p>
          Manage your fleet and drivers efficiently with our intuitive dashboard.
          Access reports, update details, and keep track of performance in just a few clicks.
        </p>
        <p>
          Navigate to specific sections to view vehicle or driver information.
          Ensure smooth operations and stay updated on all activities.
        </p>

        {/* Vehicle Section */}
        <div className="dashboard-section">
          <i className="fa fa-car dashboard-icon" aria-hidden="true"></i>
          <h2>Vehicles</h2>
          <p>View and manage all your vehicles, including performance, maintenance, and usage details.</p>
          <button
            className="dashboard-button"
            onClick={() => navigate("/manageVehicle")} 
          >
            Manage Vehicles
          </button>
        </div>

        {/* Driver Section */}
        <div className="dashboard-section">
          <i className="fa fa-user dashboard-icon" aria-hidden="true"></i>
          <h2>Drivers</h2>
          <p>Access driver records, schedules, and performance reports for better management.</p>
          <button
            className="dashboard-button"
            onClick={() => navigate("/manageDriver")} 
          >
            Manage Drivers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
