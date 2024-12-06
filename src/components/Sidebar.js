import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setIsDetailsOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("Sign Out button clicked!");
    navigate("/"); 
  };

  const hasLogo = false; 

  return (
    <aside className="dashboard-sidebar">
      <div className="company-header">
        {hasLogo ? (
          <img
            src="https://via.placeholder.com/60" 
            alt="Company Logo"
            className="company-logo"
          />
        ) : (
          <div className="company-icon">
            <i className="fa fa-camera" aria-hidden="true"></i>
          </div>
        )}
        <h2 className="company-name">Mareeya Bakery Milk Center</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">General</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li onClick={toggleDetails} className="details-toggle">
            Details
            <i
              className={`fa ${
                isDetailsOpen ? "fa-chevron-up" : "fa-chevron-down"
              }`}
              style={{ marginLeft: "10px" }}
            ></i>
          </li>
          {isDetailsOpen && (
            <ul className="nested-list">
              <li>
                <Link to="/vehicle">Vehicle</Link> 
              </li>
              <li>
                <Link to="/vehicleRepair">Vehicle Repair</Link> 
              </li>
              <li>
                <Link to="/driver">Driver</Link>
              </li>
              <li>
                <Link to="/driverPayments">Driver Payments</Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
      <button onClick={handleSignOut}>
        <i className="fa fa-sign-out"></i> Sign Out
      </button>
    </aside>
  );
};

export default Sidebar;
