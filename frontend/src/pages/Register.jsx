import "../styles/auth.css";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left">
          <h1>Join LocalServe 🚀</h1>
          <p>Book or provide trusted home services</p>
        </div>

        <div className="auth-right">
          <h2>Create Account</h2>

          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <select>
            <option>User</option>
            <option>Provider</option>
          </select>

          <button className="btn full">Create Account</button>

          <p className="auth-footer">
            Already registered? <span>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
