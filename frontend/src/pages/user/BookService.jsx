import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MapPicker from "../../components/MapPicker";

const BookService = () => {
  const navigate = useNavigate();
  const locationData = useLocation();
  const service = locationData.state?.service;

  const [slot, setSlot] = useState("");
  const [position, setPosition] = useState(null);

  // 🔴 SAFETY CHECK
  if (!service) {
    return (
      <div className="dashboard">
        <h3>No service selected</h3>
        <button className="btn" onClick={() => navigate("/user")}>
          Go Back
        </button>
      </div>
    );
  }

  const handleBooking = () => {
    if (!slot || !position) {
      alert("Please select slot and location");
      return;
    }

    alert("Booking Successful!");
  };

  return (
    <div className="dashboard">
      <h2>Book Service</h2>

      <div className="card">
        <h3>{service.name}</h3>
        <p>⭐ {service.rating} • {service.time}</p>
        <p>{service.location}</p>
      </div>

      <label>Select Slot</label>
      <select onChange={(e) => setSlot(e.target.value)}>
        <option value="">Choose</option>
        <option>9 AM - 11 AM</option>
        <option>12 PM - 2 PM</option>
        <option>3 PM - 5 PM</option>
      </select>

      <label style={{ marginTop: "10px", display: "block" }}>
        Select Location
      </label>

      <MapPicker setPosition={setPosition} />

      <button className="btn" style={{ marginTop: "15px" }} onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookService;
