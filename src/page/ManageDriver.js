import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./ManageDetails.css";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DriverPayments = () => {
  const drivers = [
    { id: 1, name: "John Doe", license: "LIC12345" },
    { id: 2, name: "Jane Smith", license: "LIC67890" },
    { id: 3, name: "Mark Johnson", license: "LIC54321" },
  ];

  const [selectedDriver, setSelectedDriver] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Example data for the chart
  const chartData = {
    labels: ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"],
    datasets: [
      {
        label: "Payments",
        data: [1200, 1300, 1250, 1400, 1500], // Example payment data
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const handleSearch = () => {
    // Toggle modal visibility
    setShowModal(true);
  };

  return (
    <div className="Detail-layout">
      <Sidebar />
      <div className="Detail-main">
        <h1 className="Detail-heading">Driver Payments Report</h1>

        <div className="Group-search-bar">
          {/* Driver Selection */}
          <div className="search-bar-container">
            <label>Select Driver:</label>
            <select
              className="driver-select"
              value={selectedDriver}
              onChange={(e) => setSelectedDriver(e.target.value)}
            >
              <option value="">Select Driver</option>
              {drivers.map((driver) => (
                <option key={driver.id} value={driver.name}>
                  {driver.name} - {driver.license}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker with Calendar Icon */}
          <div className="date-picker-container">
            <label>Select Date:</label>
            <div className="date-picker-wrapper">
              <FaCalendar className="date-picker-icon" />
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                className="date-picker-input"
                placeholderText="Select Month & Year"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="action-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Total Payments Section */}
        <div className="total-expenses-box">
          <p className="total-expenses-text">
            Total Payments : <br /> 0 LKR
          </p>
        </div>
      </div>

      {/* Custom Modal for displaying selected details and bar chart */}
      {showModal && (
        <div className="custom-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="custom-modal-header">
              <h5>Payment Details</h5>
              <button onClick={() => setShowModal(false)} className="close-modal-btn">
                X
              </button>
            </div>
            <div className="custom-modal-body">
              <h5>Driver Name: {selectedDriver}</h5>
              <h5>
                Selected Month:{" "}
                {selectedDate
                  ? selectedDate.toLocaleString("default", { month: "long", year: "numeric" })
                  : "Not selected"}
              </h5>
              <h5>Total Payments: 0 LKR</h5>

              {/* Bar Chart for Payments */}
              <Bar data={chartData} options={{ responsive: true }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverPayments;
