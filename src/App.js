import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import Settings from "./page/Settings";
import Vehicle from "./page/Vehicle";
import Driver from "./page/Driver";
import VehicleRepair from "./page/VehicleRepair";
import DriverPayments from "./page/DriverPayments";
import ManageVehicle from "./page/ManageVehicle";
import ManageDriver from "./page/ManageDriver";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />
          
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <div className="app-layout">
                <Sidebar />
                <Dashboard />
              </div>
            }
          />
          <Route
            path="/driver"
            element={
              <div className="app-layout">
                <Sidebar />
                <Driver />
              </div>
            }
          />
          <Route
            path="/vehicle"
            element={
              <div className="app-layout">
                <Sidebar />
                <Vehicle />
              </div>
            }
          />
          <Route
            path="/settings"
            element={
              <div className="app-layout">
                <Sidebar />
                <Settings />
              </div>
            }
          />
          <Route
            path="/vehicleRepair"
            element={
              <div className="app-layout">
                <Sidebar />
                <VehicleRepair />
              </div>
            }
          />
          <Route
            path="/driverPayments"
            element={
              <div className="app-layout">
                <Sidebar />
                <DriverPayments />
              </div>
            }
          />
          <Route
            path="/manageVehicle"
            element={
              <div className="app-layout">
                <Sidebar />
                <ManageVehicle />
              </div>
            }
          />
          <Route
            path="/manageDriver"
            element={
              <div className="app-layout">
                <Sidebar />
                <ManageDriver />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
