import { useState } from "react";

export default function Home() {
  const [noPosition, setNoPosition] = useState({ left: 0, top: 0 });
  const [showMessage, setShowMessage] = useState(false);

  const moveNoButton = () => {
    const containerWidth = 500;
    const containerHeight = 500;
    const buttonWidth = 120;
    const buttonHeight = 50;

    const newLeft = Math.random() * (containerWidth - buttonWidth);
    const newTop = Math.random() * (containerHeight - buttonHeight);

    setNoPosition({ left: newLeft, top: newTop });
  };

  const handleYesClick = () => {
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        position: "relative",
        padding: "10px",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "white",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
          position: "relative",
          width: "100%",
          maxWidth: "500px",
          height: "500px",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            color: "#333",
            fontFamily: "Arial, sans-serif",
            fontSize: "24px",
          }}
        >
          Are You a Stupid?
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleYesClick}
            style={{
              padding: "12px 24px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "18px",
              transition: "background-color 0.3s ease",
              maxWidth: "250px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Yes
          </button>
          <button
            style={{
              position: "absolute",
              left: `${noPosition.left}px`,
              top: `${noPosition.top}px`,
              padding: "12px 24px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "18px",
              transition: "background-color 0.3s ease",
              maxWidth: "250px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e53935")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
            onClick={moveNoButton}
          >
            No
          </button>
        </div>
      </div>

      {showMessage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              width: "80%",
              maxWidth: "300px",
            }}
          >
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
              I KNEW IT 😂
            </p>
            <button
              onClick={handleCloseMessage}
              style={{
                padding: "8px 12px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                transition: "background-color 0.3s ease",
                width: "100%",
                maxWidth: "100px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e53935")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
