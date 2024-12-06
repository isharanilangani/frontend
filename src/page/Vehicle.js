import React, { useState } from "react";
import "./Detail.css";

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      number: "AB123CD",
      type: "Truck",
      driver: "John Doe",
      brand: "Ford",
      status: "Active",
    },
    {
      id: 2,
      number: "EF456GH",
      type: "Van",
      driver: "Jane Smith",
      brand: "Mercedes",
      status: "Inactive",
    },
    {
      id: 3,
      number: "IJ789KL",
      type: "Car",
      driver: "Michael Johnson",
      brand: "Toyota",
      status: "Active",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vehicleToDelete, setVehicleToDelete] = useState(null);
  const [newVehicle, setNewVehicle] = useState({
    number: "",
    type: "",
    driver: "",
    brand: "",
    status: "Active",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) =>
          vehicle.id === selectedVehicle.id
            ? { ...selectedVehicle, ...newVehicle }
            : vehicle
        )
      );
    } else {
      const newId = vehicles.length ? vehicles[vehicles.length - 1].id + 1 : 1;
      setVehicles([...vehicles, { id: newId, ...newVehicle }]);
    }

    resetModal();
  };

  const resetModal = () => {
    setNewVehicle({
      number: "",
      type: "",
      driver: "",
      brand: "",
      status: "Active",
    });
    setSelectedVehicle(null);
    setIsEditing(false);
    setShowModal(false);
  };

  const confirmDelete = () => {
    setVehicles(
      vehicles.filter((vehicle) => vehicle.id !== vehicleToDelete.id)
    );
    setVehicleToDelete(null);
    setShowDeleteConfirmation(false);
  };

  const handleUpdate = (vehicle) => {
    setSelectedVehicle(vehicle);
    setNewVehicle(vehicle);
    setIsEditing(true);
    setShowModal(true);
  };

  const openDeleteConfirmation = (vehicle) => {
    setVehicleToDelete(vehicle);
    setShowDeleteConfirmation(true);
  };

  return (
    <div className="Detail-layout">
      <div className="Detail-main">
        <h1 className="Detail-heading">Vehicles</h1>
        <button className="add-button" onClick={() => setShowModal(true)}>
          Add New Vehicle
        </button>

        {showModal && (
          <div className="modal-overlay">
            <form onSubmit={handleFormSubmit} className="modal-container">
              <h2 className="modal-title">
                {isEditing ? "Update Vehicle Details" : "Add Vehicle Details"}
              </h2>
              <input
                type="text"
                placeholder="Vehicle Number"
                value={newVehicle.number}
                onChange={(e) =>
                  setNewVehicle({ ...newVehicle, number: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Driver Name"
                value={newVehicle.driver}
                onChange={(e) =>
                  setNewVehicle({ ...newVehicle, driver: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Vehicle Type"
                value={newVehicle.type}
                onChange={(e) =>
                  setNewVehicle({ ...newVehicle, type: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Brand"
                value={newVehicle.brand}
                onChange={(e) =>
                  setNewVehicle({ ...newVehicle, brand: e.target.value })
                }
                required
              />
              <select
                value={newVehicle.status}
                onChange={(e) =>
                  setNewVehicle({ ...newVehicle, status: e.target.value })
                }
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="modal-buttons">
                <button type="submit" className="modal-submit-button">
                  {isEditing ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={resetModal}
                >
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
              <p>Are you sure you want to delete the vehicle?</p>
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
              <th>Vehicle Number</th>
              <th>Driver Name</th>
              <th>Vehicle Type</th>
              <th>Brand</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.number}</td>
                <td>{vehicle.driver}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.brand}</td>
                <td>{vehicle.status}</td>
                <td>
                  <button
                    className="action-button update-button"
                    onClick={() => handleUpdate(vehicle)}
                  >
                    Update
                  </button>
                  <button
                    className="action-button delete-button"
                    onClick={() => openDeleteConfirmation(vehicle)}
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

export default Vehicle;
