import React from "react";

export default function Verified() {
  return (
    <div className="verified-container">
      <div className="verified-card">
        <svg className="verified-icon" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#4CAF50"/>
          <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" fill="none"/>
        </svg>
        <h1>Email Verified!</h1>
        <p>Your email has been successfully verified.</p>
        <p>Please return to the app and log in with your credentials.</p>
        <a href="/login" className="login-link">Go to Login</a>
      </div>
    </div>
  );
}