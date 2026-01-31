import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";

const AdminDashboard = () => {
  return (
    <>
      <Header />

      <div className="dashboard">
        <h2>Admin Dashboard</h2>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <p>Total Users</p>
            <h3>124</h3>
          </div>

          <div className="stat-card">
            <p>Providers</p>
            <h3>38</h3>
          </div>

          <div className="stat-card">
            <p>Total Bookings</p>
            <h3>286</h3>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="dashboard-section">
          <h3>Admin Controls</h3>
          <div className="action-row">
            <button className="btn">Manage Providers</button>
            <button className="btn secondary">View Reports</button>
            <button className="btn secondary">System Settings</button>
          </div>
        </div>

        {/* SYSTEM STATUS */}
        <div className="dashboard-section info-box">
          <h4>System Health</h4>
          <p>All services are running normally.</p>
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default AdminDashboard;
