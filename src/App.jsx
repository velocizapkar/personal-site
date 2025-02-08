import React from 'react';

const App = () => {
  // Styles for the container
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',   // Center horizontally
    alignItems: 'center',       // Center vertically
    width: '100vw',             // Fill the viewport width
    height: '100vh',            // Fill the viewport height
    overflow: 'hidden',         // Hide any scrollbars
    backgroundSize: 'cover',    // Make the image cover the entire background
    backgroundImage: 'url("bubble.gif")',  // Use bubble.gif as background
    backgroundRepeat: 'no-repeat',         // Don’t tile the image
    backgroundPosition: 'center'           // Center the background
  };

  // Styles for the text
  const textStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '3rem',
    fontWeight: '700',
    color: '#ffffff',
    // textTransform: 'uppercase',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
  };

  return (
    <div style={containerStyle}>
      <a style={textStyle}>under construction</a>
    </div>
  );
};

export default App;
