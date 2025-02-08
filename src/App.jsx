import React from "react";

const App = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundImage: 'url("bubble.gif")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const textStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "clamp(2rem, 6vw, 4rem)", // Responsive font size
    fontWeight: "700",
    color: "#ffffff",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
    whiteSpace: "nowrap", // Ensure "under construction" stays on the same line
  };

  return (
    <div style={containerStyle}>
      <span style={textStyle}>under construction</span>
    </div>
  );
};

export default App;
