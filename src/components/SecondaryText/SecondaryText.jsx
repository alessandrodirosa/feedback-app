/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconeBase8 } from "../../icons/IconeBase8";
import "./style.css";

export const SecondaryText = ({
  size,
  stateProp,
  icon,
  className,
  secondaryTextClassName,
  buttonPrimaryClassName,
  text = "ACQUISTA",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "xl",
    state: stateProp || "default",
    icon: icon || "no",
  });

  return (
    <div
      className={`secondary-text size-19-${state.size} icon-5-${state.icon} state-17-${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.icon === "no" && (
        <div className={`secondary_text-2 ${secondaryTextClassName}`}>
          {(state.size === "md" || state.size === "xl" || (state.size === "sm" && state.state === "default")) && (
            <div className={`button_primary ${buttonPrimaryClassName}`}>
              {state.size === "xl" && <div className="acquista-11">{text}</div>}

              {state.size === "md" && <>{text}</>}

              {state.size === "sm" && <>BUTTON</>}
            </div>
          )}

          {state.size === "sm" && ["disabled", "hover", "pressed"].includes(state.state) && <>BUTTON</>}
        </div>
      )}

      {state.icon === "left" && (
        <img
          className="icone-base-4"
          alt="Icon base chat fill"
          src={
            state.state === "pressed"
              ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icon---base-chat-fill-34.svg"
              : state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icon---base-chat-fill-32.svg"
              : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icon---base-chat-fill-35.svg"
          }
        />
      )}

      {["left", "right"].includes(state.icon) && <div className="BUTTON-3">BUTTON</div>}

      {state.icon === "right" && ["md", "xl"].includes(state.size) && (
        <IconeBase8
          className="icone-base-4"
          color={state.state === "pressed" ? "white" : state.state === "disabled" ? "#989898" : "#262626"}
        />
      )}

      {state.icon === "right" && state.size === "sm" && (
        <img
          className="icone-base-4"
          alt="Icone base"
          src={
            state.state === "pressed"
              ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icone---base-29.svg"
              : state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icone---base-28.svg"
              : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icone---base-31.svg"
          }
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.icon === "no" && state.size === "xl" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "no",
          size: "xl",
          state: "hover",
        };
    }
  }

  if (state.icon === "no" && state.size === "xl" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "no",
          size: "xl",
          state: "default",
        };

      case "click":
        return {
          icon: "no",
          size: "xl",
          state: "pressed",
        };
    }
  }

  return state;
}

SecondaryText.propTypes = {
  size: PropTypes.oneOf(["md", "sm", "xl"]),
  stateProp: PropTypes.oneOf(["disabled", "pressed", "hover", "default"]),
  icon: PropTypes.oneOf(["right", "no", "left"]),
  text: PropTypes.string,
};
