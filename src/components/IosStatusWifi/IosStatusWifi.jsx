/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IosStatusWifi = ({
  signal,
  className,
  signalHigh = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/ios-status-wifi-11.svg",
}) => {
  return (
    <img
      className={`ios-status-wifi ${className}`}
      alt="Signal high"
      src={
        signal === "mid"
          ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/signal-mid.svg"
          : signal === "low"
          ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/signal-low.svg"
          : signal === "none"
          ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/signal-none.svg"
          : signalHigh
      }
    />
  );
};

IosStatusWifi.propTypes = {
  signal: PropTypes.oneOf(["none", "mid", "low", "high"]),
  signalHigh: PropTypes.string,
};
