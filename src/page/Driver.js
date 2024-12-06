import React, { useState } from "react"; 
import "./Detail.css";

const Driver = () => {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "John Doe",
      contact: "123-456-7890",
      license: "LIC12345",
      vehicle: "AB123CD",
    },
    {
      id: 2,
      name: "Jane Smith",
      contact: "987-654-3210",
      license: "LIC67890",
      vehicle: "EF456GH",
    },
    {
      id: 3,
      name: "Michael Johnson",
      contact: "456-123-7890",
      license: "LIC11111",
      vehicle: "IJ789KL",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [driverToDelete, setDriverToDelete] = useState(null);
  const [newDriver, setNewDriver] = useState({
    name: "",
    contact: "",
    license: "",
    vehicle: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setDrivers((prevDrivers) =>
        prevDrivers.map((driver) =>
          driver.id === selectedDriver.id ? { ...selectedDriver, ...newDriver } : driver
        )
      );
    } else {
      const newId = drivers.length ? drivers[drivers.length - 1].id + 1 : 1;
      setDrivers([...drivers, { id: newId, ...newDriver }]);
    }

    resetModal();
  };

  const resetModal = () => {
    setNewDriver({ name: "", contact: "", license: "", vehicle: "" });
    setSelectedDriver(null);
    setIsEditing(false);
    setShowModal(false);
  };

  const confirmDelete = () => {
    setDrivers(drivers.filter((driver) => driver.id !== driverToDelete.id));
    setDriverToDelete(null);
    setShowDeleteConfirmation(false);
  };

  const handleUpdate = (driver) => {
    setSelectedDriver(driver);
    setNewDriver(driver);
    setIsEditing(true);
    setShowModal(true);
  };

  const openDeleteConfirmation = (driver) => {
    setDriverToDelete(driver);
    setShowDeleteConfirmation(true);
  };

  return (
    <div className="Detail-layout">
      <div className="Detail-main">
        <h1 className="Detail-heading">Drivers</h1>
        <button className="add-button" onClick={() => setShowModal(true)}>
          Add New Driver
        </button>

        {showModal && (
          <div className="modal-overlay">
            <form onSubmit={handleFormSubmit} className="modal-container">
              <h2 className="modal-title">
                {isEditing ? "Update Driver Details" : "Add Driver Details"}
              </h2>
              <input
                type="text"
                placeholder="Driver Name"
                value={newDriver.name}
                onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Contact"
                value={newDriver.contact}
                onChange={(e) => setNewDriver({ ...newDriver, contact: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="License No"
                value={newDriver.license}
                onChange={(e) => setNewDriver({ ...newDriver, license: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Vehicle No"
                value={newDriver.vehicle}
                onChange={(e) => setNewDriver({ ...newDriver, vehicle: e.target.value })}
                required
              />
              <div className="modal-buttons">
                <button type="submit" className="modal-submit-button">
                  {isEditing ? "Update" : "Add"}
                </button>
                <button type="button" className="modal-close-button" onClick={resetModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {showDeleteConfirmation && (
          <div className="modal-overlay">
            <div className="modal-container">
              <h2 className="modal-title">Confirm Delete</h2>
              <p>Are you sure you want to delete this driver?</p>
              <div className="modal-buttons">
                <button className="modal-submit-button" onClick={confirmDelete}>
                  Yes
                </button>
                <button
                  className="modal-close-button"
                  onClick={() => setShowDeleteConfirmation(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <table className="Detail-table">
          <thead>
            <tr>
              <th>Driver Name</th>
              <th>Contact</th>
              <th>License No</th>
              <th>Vehicle No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id}>
                <td>{driver.name}</td>
                <td>{driver.contact}</td>
                <td>{driver.license}</td>
                <td>{driver.vehicle}</td>
                <td>
                  <button
                    className="action-button update-button"
                    onClick={() => handleUpdate(driver)}
                  >
                    Update
                  </button>
                  <button
                    className="action-button delete-button"
                    onClick={() => openDeleteConfirmation(driver)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Driver;
