import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import StatusChip from "../../components/StatusChip";

const providers = [
  {
    id: 1,
    name: "Ramesh Plumbing",
    document: "Aadhaar + PAN",
    status: "Pending",
  },
  {
    id: 2,
    name: "Sai Electrician",
    document: "Aadhaar + PAN",
    status: "Approved",
  },
];

const Approvals = () => {
  return (
    <>
      <Header />

      <div className="dashboard">
        <h2>Provider Approvals</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Documents</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {providers.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.document}</td>
                  <td>
                    <StatusChip status={p.status} />
                  </td>
                  <td>
                    {p.status === "Pending" && (
                      <>
                        <button className="btn small">Approve</button>
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

export default Approvals;
