import React, { useState } from "react";
import '../styles/signup.css';

function SignupModal({ setSignedUp }) {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const sendCode = (e) => {
    e.preventDefault();
    setCodeSent(true);
    setError("");
  };

  const verifyCode = (e) => {
    e.preventDefault();
    if (code.length > 0) {
      setSignedUp(true);
    } else {
      setError("Please enter the verification code sent to your email.");
    }
  };

  return (
    <div className="signup-modal">
      <form onSubmit={codeSent ? verifyCode : sendCode}>
        <h2>Sign Up to MODENZO</h2>
        {!codeSent ? (
          <>
            <label>Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button type="submit">Send Verification Code</button>
          </>
        ) : (
          <>
            <label>Verification Code:</label>
            <input
              type="text"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter code from email"
            />
            <button type="submit">Verify and Sign Up</button>
            {error && <div className="error">{error}</div>}
          </>
        )}
      </form>
    </div>
  );
}

export default SignupModal;