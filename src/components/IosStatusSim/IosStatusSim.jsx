/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IosStatusSim = ({
  type,
  typeSingleClassName,
  vec = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/vec-4.svg",
}) => {
  return (
    <>
      {["dual", "none", "single"].includes(type) && (
        <div className={`ios-status-sim type-single ${typeSingleClassName}`}>
          <img
            className={`vec ${type}`}
            alt="Vec"
            src={
              type === "dual"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/vec-3.svg"
                : type === "none"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/vec-2.svg"
                : vec
            }
          />
        </div>
      )}

      {type === "flight" && (
        <img
          className={`ios-status-sim type-flight ${typeSingleClassName}`}
          alt="Type flight"
          src="https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/type-flight.svg"
        />
      )}
    </>
  );
};

IosStatusSim.propTypes = {
  type: PropTypes.oneOf(["none", "single", "flight", "dual"]),
  vec: PropTypes.string,
};
