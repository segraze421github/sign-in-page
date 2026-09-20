import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e) {
    e.preventDefault();
    alert(`Signing in as ${email}`);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f2f4f7",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "35px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Sign In
        </h1>

        <p style={{ textAlign: "center", color: "#666" }}>
          Welcome back
        </p>

        <form onSubmit={handleSignIn}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              margin: "8px 0 18px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              margin: "8px 0 20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              background: "#2563eb",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Don't have an account?{" "}
          <a href="#" style={{ color: "#2563eb" }}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}app
