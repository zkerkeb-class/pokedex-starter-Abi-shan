import React from "react";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div className="spinner" />
      <p>Chargement...</p>

      <style>
        {`
        .spinner {
          width: 50px;
          height: 50px;
          border: 6px solid #ccc;
          border-top: 6px solid #007bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 10px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
    </div>
  );
};

export default Loading;
