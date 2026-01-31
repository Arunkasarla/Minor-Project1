import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} />

      <div className="service-info">
        <h3>{service.name}</h3>

        <div className="service-meta">
          <span>⭐ {service.rating}</span>
          <span>{service.time}</span>
        </div>

        <p className="service-location">{service.location}</p>

        <button
          className="btn"
          onClick={() =>
            navigate("/user/book", { state: { service } })
          }
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
