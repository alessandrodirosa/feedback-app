/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IosStatusBattery = ({
  type,
  charge,
  className,
  vecClassName,
  overlapGroupClassName,
  batteryFillClassName,
  batteryFrame = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/battery-frame-17.svg",
}) => {
  return (
    <div className={`ios-status-battery ${className}`}>
      <div className={`vec-2 ${type} charge-${charge} ${vecClassName}`}>
        {(type === "high" || type === "mid" || (!charge && type === "low")) && (
          <div className={`overlap-group ${overlapGroupClassName}`}>
            {!charge && ["high", "mid"].includes(type) && <div className={`battery-fill ${batteryFillClassName}`} />}

            {["high", "mid"].includes(type) && (
              <img
                className="battery-frame"
                alt="Battery frame"
                src={
                  !charge
                    ? batteryFrame
                    : type === "mid" && charge
                    ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/battery-fill.svg"
                    : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/battery-fill-1.svg"
                }
              />
            )}

            {charge && (
              <>
                <img
                  className="battery-frame-2"
                  alt="Battery frame"
                  src="https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/battery-frame-3.svg"
                />
                <img
                  className="changing"
                  alt="Changing"
                  src="https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/changing-2.svg"
                />
              </>
            )}
          </div>
        )}

        {type === "low" && charge && (
          <>
            <img
              className="changing"
              alt="Changing"
              src="https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/changing-2.svg"
            />
            <div className="battery-fill-2" />
          </>
        )}
      </div>
    </div>
  );
};

IosStatusBattery.propTypes = {
  type: PropTypes.oneOf(["mid", "low", "high"]),
  charge: PropTypes.bool,
  batteryFrame: PropTypes.string,
};
