import React from 'react';

const Onboarding = ({ onFinish }) => {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <img src="/icons/icon-192.png" alt="Together logo" style={{ width: 100, marginBottom: 20 }} />
      <h1>Welcome to Together 💖</h1>
      <p>Your private space for connection, conversation, and growth as a couple.</p>
      <p>Start daily prompts, journal your thoughts, and resolve conflicts with intention.</p>
      <button onClick={onFinish} style={{ padding: 10, marginTop: 20 }}>Let’s Begin</button>
    </div>
  );
};

export default Onboarding;