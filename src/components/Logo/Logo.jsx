/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({
  darkMode,
  className,
  darkModeTrue = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/dark-mode-true.svg",
}) => {
  return (
    <img
      className={`logo dark-mode-${darkMode} ${className}`}
      alt="Dark mode false"
      src={
        darkMode
          ? darkModeTrue
          : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/dark-mode-false.svg"
      }
    />
  );
};

Logo.propTypes = {
  darkMode: PropTypes.bool,
  darkModeTrue: PropTypes.string,
};
