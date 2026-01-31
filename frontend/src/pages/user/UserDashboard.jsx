import { useState } from "react";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import ServiceCard from "../../components/ServiceCard";

const services = [
  {
    name: "Ramesh Plumbing Services",
    category: "Plumber",
    rating: "4.5",
    time: "20–30 mins",
    location: "Hanuman Nagar",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    name: "Sai Electrician Services",
    category: "Electrician",
    rating: "4.6",
    time: "20–30 mins",
    location: "Hanuman Nagar",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9f94b0",
  },
  {
    name: "FreshHome Cleaning",
    category: "Cleaner",
    rating: "4.5",
    time: "25–35 mins",
    location: "Near V Mart",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
  },
];

const UserDashboard = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredServices = services.filter(
    (s) =>
      (filter === "All" || s.category === filter) &&
      s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* TOP HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <div className="dashboard user-dashboard">
        <h2>Available Services</h2>

        {/* FILTERS */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Plumber">Plumber</option>
            <option value="Electrician">Electrician</option>
            <option value="Cleaner">Cleaner</option>
          </select>
        </div>

        {/* SERVICES GRID */}
        <div className="service-grid">
          {filteredServices.length === 0 ? (
            <div className="empty-state">
              <h3>No services found</h3>
              <p>Try changing search or category</p>
            </div>
          ) : (
            filteredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))
          )}
        </div>
      </div>

      {/* BOTTOM NAV */}
      <BottomNav />
    </>
  );
};

export default UserDashboard;
