import React from "react";

const Error = ({ message }) => {
  return (
    <div style={{ padding: "1rem", textAlign: "center", color: "#d32f2f" }}>
      <h3>🚨 Erreur</h3>
      <p>{message}</p>
    </div>
  );
};

export default Error;
