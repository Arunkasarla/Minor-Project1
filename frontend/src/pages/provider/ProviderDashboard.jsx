import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";

const ProviderDashboard = () => {
  return (
    <>
      <Header />

      <div className="dashboard">
        <h2>Provider Dashboard</h2>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <p>Today's Orders</p>
            <h3>3 Active</h3>
          </div>

          <div className="stat-card">
            <p>Earnings</p>
            <h3>₹1,250</h3>
          </div>

          <div className="stat-card">
            <p>Rating</p>
            <h3>⭐ 4.6</h3>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="dashboard-section">
          <h3>Quick Actions</h3>
          <div className="action-row">
            <button className="btn">Go Online</button>
            <button className="btn secondary">View Earnings</button>
            <button className="btn secondary">My Orders</button>
          </div>
        </div>

        {/* INFO */}
        <div className="dashboard-section info-box">
          <h4>Status</h4>
          <p>You are currently <b>Online</b> and available for new bookings.</p>
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default ProviderDashboard;
