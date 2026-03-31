import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.scss";

function AddRestaurant() {
  const [form, setForm] = useState({ name: "", cuisine: "", address: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Add Your Restaurant</h2>
        <p>Partner with us and reach thousands of customers</p>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h3 style={{ color: "#3d9b6d", marginBottom: 8 }}>Application Submitted!</h3>
            <p style={{ marginBottom: 24 }}>We'll review your application and get back within 24 hours.</p>
            <button
              className="auth-btn"
              onClick={() => navigate("/")}
              style={{ marginTop: 0 }}
            >
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
            {[
              { label: "Restaurant Name", name: "name", placeholder: "e.g. Spice Garden" },
              { label: "Cuisine Type", name: "cuisine", placeholder: "e.g. North Indian, Chinese" },
              { label: "Address", name: "address", placeholder: "Full restaurant address" },
              { label: "Phone Number", name: "phone", placeholder: "+91 XXXXX XXXXX" },
            ].map((field) => (
              <div className="form-group" key={field.name}>
                <label>{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <button type="submit" className="auth-btn">Submit Application</button>
            <p className="auth-switch">
              <span onClick={() => navigate("/")}>← Back to Home</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddRestaurant;
