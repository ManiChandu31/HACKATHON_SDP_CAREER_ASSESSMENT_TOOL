import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // ADMIN LOGIN
    if (email === "admin@example.com" && password === "Admin123") {
      alert("Admin Login Successful!");
      localStorage.setItem("loggedIn", "admin");
      navigate("/admin/dashboard");
      return;
    }

    // STUDENT LOGIN
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        u.email === email.trim().toLowerCase() &&
        u.password === password.trim()
    );

    if (foundUser) {
      alert("User Login Successful!");
      localStorage.setItem("loggedIn", "user");
      navigate("/user/dashboard");
      return;
    }

    alert("Incorrect email or password");
  };

  return (
    <div>
      <h2 className="form-title">Sign In</h2>

      <div className="form-row">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-row">
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-row">
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>

      <div className="helper">
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>Sign Up</span>
      </div>
    </div>
  );
}

export default SignIn;
