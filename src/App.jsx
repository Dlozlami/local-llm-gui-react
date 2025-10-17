import { useEffect, useState } from 'react';
import localLogoPath from "./assets/ai.png";


function App() {
  const [prompt, setPrompt] = useState("");
  const [reload, setReload] = useState(null);
  let chat=[]

  useEffect(()=>{

  },[reload])
  // Define the ethereal name for the app
  const appName = "Aether";

  // Base style for the entire screen container using Flexbox
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensure it covers the full viewport height
    fontFamily: 'Inter, sans-serif',
    width:"100%"
  };
  
  // Style for the combined Logo and Title section (new)
  const headerContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Vertically center the logo and text
    justifyContent:"center",
    gap: '5%', // Space between the title and the logo
    marginBottom: '2%', // Space below the header unit, separating it from the input
  };

  // Style for the app title
  const titleStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    letterSpacing: '0.05em',
  };

  // Style for the input field
  const inputStyle = {
    width: '90%',
    maxWidth: '600px',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    // Removed marginTop, now handled by headerContainerStyle marginBottom
  };

  // Style for the logo container/image
  const logoStyle = {
    width: '5%'
 //   boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -4px rgba(37, 99, 235, 0.3)',
  };

  return (
    <div style={containerStyle}>
      {/* Combined Title and Logo Header */}
      <div style={headerContainerStyle}>
        {/* Title Section */}
        <h1 style={titleStyle}>{appName}</h1>

        {/* Logo Section */}
        <img
          src={localLogoPath} // Updated to use the local path
          alt="AI Logo"
          style={logoStyle}
        />
      </div>

      {/* Communication Exchange Section */}
      {
        chat?<div>

        </div>:null
      }
      
      {/* Input Section */}
      <input
        type="text"
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={inputStyle}
        // Add a focus effect via inline style overriding
        onFocus={(e) => e.target.style.borderColor = '#757519'}
        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
      />
    </div>
  );
}

export default App;
