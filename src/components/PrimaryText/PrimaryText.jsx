/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconeBase8 } from "../../icons/IconeBase8";
import "./style.css";

export const PrimaryText = ({ size, stateProp, icon, text = "BUTTON", className, text1 = "ACQUISTA" }) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "xl",
    state: stateProp || "hover",
    icon: icon || "no",
  });

  return (
    <div
      className={`primary-text size-11-${state.size} state-7-${state.state} icon-3-${state.icon} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.icon === "no" && (
        <div className="primary_text-2">
          {["md", "xl"].includes(state.size) && (
            <div className="button_primary">
              {(state.state === "hover" ||
                (state.size === "xl" && state.state === "disabled") ||
                (state.size === "xl" && state.state === "pressed")) && <div className="acquista-i">{text1}</div>}

              {(state.state === "default" ||
                (state.size === "md" && state.state === "disabled") ||
                (state.size === "md" && state.state === "pressed")) && <>{text1}</>}
            </div>
          )}

          {state.size === "sm" && <>{text}</>}
        </div>
      )}

      {state.icon === "left" && (
        <img
          className="icone-base-2"
          alt="Icon base chat fill"
          src={
            state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icon---base-chat-fill-32.svg"
              : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icon---base-chat-fill-34.svg"
          }
        />
      )}

      {["left", "right"].includes(state.icon) && <div className="BUTTON">{text}</div>}

      {state.icon === "right" && ["md", "xl"].includes(state.size) && (
        <IconeBase8 className="icone-base-2" color={state.state === "disabled" ? "#989898" : "white"} />
      )}

      {state.icon === "right" && state.size === "sm" && (
        <img
          className="icone-base-2"
          alt="Icone base"
          src={
            state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icone---base-16.svg"
              : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icone---base-19.svg"
          }
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        state: "pressed",
      };
  }

  return state;
}

PrimaryText.propTypes = {
  size: PropTypes.oneOf(["md", "sm", "primary", "xl"]),
  stateProp: PropTypes.oneOf(["default", "pressed", "hover", "text", "disabled"]),
  icon: PropTypes.oneOf(["right", "xl", "no", "left"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
