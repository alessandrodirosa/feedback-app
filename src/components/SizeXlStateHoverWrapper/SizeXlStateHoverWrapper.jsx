/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconeBase8 } from "../../icons/IconeBase8";
import "./style.css";

export const SizeXlStateHoverWrapper = ({ size, stateProp, icon, className, text = "BUTTON" }) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "primary",
    state: stateProp || "text",
    icon: icon || "xl",
  });

  return (
    <div
      className={`size-xl-state-hover-wrapper size-15-${state.size} state-12-${state.state} icon-4-${state.icon} ${className}`}
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
                (state.size === "xl" && state.state === "pressed")) && <div className="acquista-10">ACQUISTA</div>}

              {(state.state === "default" ||
                (state.size === "md" && state.state === "disabled") ||
                (state.size === "md" && state.state === "pressed")) && <>ACQUISTA</>}
            </div>
          )}

          {state.size === "sm" && <>{text}</>}
        </div>
      )}

      {state.icon === "left" && (
        <img
          className="icone-base-3"
          alt="Icon base chat fill"
          src={
            state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icon---base-chat-fill-32.svg"
              : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icon---base-chat-fill-34.svg"
          }
        />
      )}

      {["left", "right"].includes(state.icon) && <div className="BUTTON-2">{text}</div>}

      {state.icon === "right" && ["md", "xl"].includes(state.size) && (
        <IconeBase8 className="icone-base-3" color={state.state === "disabled" ? "#989898" : "white"} />
      )}

      {state.icon === "right" && state.size === "sm" && (
        <img
          className="icone-base-3"
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

SizeXlStateHoverWrapper.propTypes = {
  size: PropTypes.oneOf(["md", "sm", "primary", "xl"]),
  stateProp: PropTypes.oneOf(["default", "pressed", "hover", "text", "disabled"]),
  icon: PropTypes.oneOf(["right", "xl", "no", "left"]),
  text: PropTypes.string,
};
