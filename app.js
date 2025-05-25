const Welcome = () =>
  React.createElement(
    "div",
    { className: "welcome-container" },
    React.createElement(
      "div",
      { className: "welcome-card" },
      React.createElement("img", {
        src: "icon.png", // Ensure this file is in the same directory
        alt: "Dhanshree Constro Solutions Logo",
        className: "welcome-image"
      }),
      React.createElement("h1", null, "Welcome to Dhanshree Constro Solutions"),
      React.createElement("p", null, "Registration successful. Please log in to the app.")
    )
  );

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Welcome));
