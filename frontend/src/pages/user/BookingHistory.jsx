const BookingHistory = () => {
  const bookings = [
    { id: 1, service: "Plumber", status: "Completed" },
    { id: 2, service: "Electrician", status: "On the way" }
  ];

  return (
    <div className="dashboard">
      <h2>My Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b.id}>
            {b.service} — <b>{b.status}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
