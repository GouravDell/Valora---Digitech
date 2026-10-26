
const React = require("react");

function Home() {
  return React.createElement(
    "main",
    null,

    React.createElement(
      "section",
      { className: "hero", id: "home" },

      React.createElement(
        "div",
        { className: "hero-content" },

        React.createElement(
          "span",
          { className: "badge" },
          "Valora DIGITECH IT SOLUTIONS"
        ),

        React.createElement(
          "h1",
          null,
          "We Build ",
          React.createElement(
            "span",
            { className: "highlight" },
            "Digital Experiences"
          ),
          " That Drive Growth."
        ),

        React.createElement(
          "p",
          null,
          "Transform your ideas into powerful digital solutions. ",
          "We specialize in modern web development, custom software, ",
          "responsive applications, and AI-powered technologies ",
          "that help businesses move forward."
        ),

        React.createElement(
          "div",
          { className: "hero-buttons" },

          React.createElement(
            "a",
            {
              href: "#services",
              className: "primary-button"
            },
            "Explore Services ",
            React.createElement("span", null, "→")
          ),

          React.createElement(
            "a",
            {
              href: "#contact",
              className: "secondary-button"
            },
            "Start a Project"
          )
        ),

        React.createElement(
          "div",
          { className: "hero-tagline" },
          "Innovate. Build. Transform."
        )
      )
    )
  );
}

module.exports = Home;