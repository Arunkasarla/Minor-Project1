import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import StatusChip from "../../components/StatusChip";

const orders = [
  {
    id: 1,
    customer: "Ravi Kumar",
    service: "Plumbing",
    location: "Hanuman Nagar",
    status: "Pending",
  },
  {
    id: 2,
    customer: "Anjali",
    service: "Electrician",
    location: "Near V Mart",
    status: "Accepted",
  },
  {
    id: 3,
    customer: "Suresh",
    service: "Cleaning",
    location: "MG Road",
    status: "Completed",
  },
];

const Orders = () => {
  return (
    <>
      <Header />

      <div className="dashboard">
        <h2>My Orders</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.customer}</td>
                  <td>{o.service}</td>
                  <td>{o.location}</td>
                  <td>
                    <StatusChip status={o.status} />
                  </td>
                  <td>
                    {o.status === "Pending" && (
                      <>
                        <button className="btn small">Accept</button>
                        <button className="btn small secondary">
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Orders;
