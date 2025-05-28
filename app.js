// Get verification date from URL parameters
const getVerificationDate = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const timestamp = urlParams.get('timestamp');
  if (timestamp) {
    let ts = parseInt(timestamp, 10);
    if (isNaN(ts) || ts <= 0) {
      return new Date().toLocaleDateString(); // fallback to current date
    }
    // If timestamp is in seconds (10 digits), convert to milliseconds
    if (ts < 1000000000000) {
      ts = ts * 1000;
    }
    return new Date(ts).toLocaleDateString();
  }
  return new Date().toLocaleDateString(); // Fallback to current date
};

const Welcome = () =>
  React.createElement(
    "div",
    { className: "welcome-container" },
    React.createElement(
      "div",
      { className: "welcome-card" },
      // Company logo
      React.createElement("img", {
        src: "icon.png", // Ensure this file is in the same directory
        alt: "Dhanshree Constro Solutions Logo",
        className: "welcome-image",
        onError: function(e) {
          e.target.style.display = 'none'; // Hide if image fails to load
        }
      }),
      // Main heading
      React.createElement("h1", null, "Welcome to Dhanshree Constro Solutions"),
      // Success message
      React.createElement("p", null, "Registration successful. Please log in to the app."),
      // Date stamp
      React.createElement("small", { 
        style: { 
          color: "#718096", 
          fontSize: "0.875rem", 
          marginTop: "1rem", 
          display: "block" 
        } 
      }, `Verified on ${getVerificationDate()}`),
      // Success indicator at bottom with pulsing animation
      React.createElement("div", { 
        className: "success-indicator pulsing",
        style: {
          marginTop: "2rem"
        }
      })
    )
  );

// Error boundary for better user experience
const ErrorBoundary = (props) => {
  const [hasError, setHasError] = React.useState(false);
  
  if (hasError) {
    return React.createElement("div", { 
      style: { 
        textAlign: "center", 
        padding: "2rem",
        color: "#e53e3e" 
      } 
    }, "Something went wrong. Please refresh the page.");
  }
  
  return props.children;
};

// Render with error boundary
ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(ErrorBoundary, null, React.createElement(Welcome))
);
