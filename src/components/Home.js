const React = require("react");

function Home() {
  return React.createElement(
    "main",

    null,

    React.createElement(
      "section",
      { className: "hero" },

      React.createElement(
        "div",
        { className: "hero-content" },

        React.createElement(
          "span",
          { className: "badge" },
          "DIGITAL ENGINEERING PARTNER"
        ),

        React.createElement(
          "h1",
          null,
          "We turn bold ideas into digital reality."
        ),

        React.createElement(
          "p",
          null,
          "We build software, websites, mobile applications and AI solutions that help businesses grow."
        ),

        React.createElement(
          "div",
          { className: "hero-buttons" },

          React.createElement(
            "a",
            {
              href: "/services",
              className: "primary-button"
            },
            "Explore Services"
          ),

          React.createElement(
            "a",
            {
              href: "/contact",
              className: "secondary-button"
            },
            "Start a Project"
          )
        )
      )
    )
  );
}

module.exports = Home;