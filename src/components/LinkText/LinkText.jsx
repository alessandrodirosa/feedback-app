/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const LinkText = ({
  stateProp,
  size,
  icon,
  lineUp,
  text = "TEXT LINK",
  lineClassName,
  line = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-47.svg",
  className,
  acquistaClassName,
  img = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-52.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    size: size || "sm",
    icon: icon || "no",
    lineUp: lineUp,
  });

  return (
    <div
      className={`link-text ${state.state} line-up-${state.lineUp} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {((state.icon === "left" && state.state === "default") ||
        (state.icon === "no" && !state.lineUp && state.state === "default") ||
        (state.icon === "no" && state.state === "disabled") ||
        (state.icon === "right" && state.state === "default")) && (
        <div className={`acquista ${state.size} state-${state.state} ${state.icon}`}>
          {state.icon === "no" && <>{text}</>}

          {state.icon === "right" && <div className="text-wrapper">{text}</div>}

          {["left", "right"].includes(state.icon) && (
            <img
              className="icons-stroke-plus"
              alt="Icons stroke plus"
              src="https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icons-stroke-plus-41@2x.png"
            />
          )}

          {state.icon === "left" && <div className="div">{text}</div>}
        </div>
      )}

      {(state.state === "hover" ||
        state.state === "pressed" ||
        (state.icon === "right" && state.state === "disabled")) && (
        <>
          <div
            className={`acquista-2 size-1-${state.size} state-0-${state.state} icon-${state.icon} ${acquistaClassName}`}
          >
            {(state.icon === "no" || state.state === "disabled") && <>{text}</>}

            {state.icon === "right" && ["hover", "pressed"].includes(state.state) && (
              <div className="acquista-3">{text}</div>
            )}

            {(state.icon === "left" ||
              (state.icon === "right" && state.state === "hover") ||
              (state.icon === "right" && state.state === "pressed")) && (
              <img
                className="icons-stroke-plus"
                alt="Icons stroke plus"
                src="https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icons-stroke-plus-47@2x.png"
              />
            )}

            {state.icon === "left" && <div className="acquista-4">{text}</div>}
          </div>
          <img
            className={`line state-1-${state.state} size-4-${state.size} icon-0-${state.icon} ${lineClassName}`}
            alt="Line"
            src={
              state.icon === "no" && state.size === "sm" && state.state === "hover"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-53.svg"
                : state.icon === "no" && state.size === "md" && state.state === "hover"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-48.svg"
                : state.icon === "no" && state.size === "xl" && state.state === "hover"
                ? line
                : state.size === "xxl" && state.state === "hover"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-46.svg"
                : state.icon === "no" && state.size === "sm" && state.state === "pressed"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-45.svg"
                : state.icon === "no" && state.size === "md" && state.state === "pressed"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-44.svg"
                : state.icon === "no" && state.size === "xl" && state.state === "pressed"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-43.svg"
                : state.size === "xxl" && state.state === "pressed"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-42.svg"
                : (state.icon === "left" && state.size === "md") ||
                  (state.icon === "right" && state.size === "md" && state.state === "hover") ||
                  (state.icon === "right" && state.size === "md" && state.state === "pressed")
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-40.svg"
                : (state.icon === "left" && state.size === "xl") ||
                  (state.icon === "right" && state.size === "xl" && state.state === "hover") ||
                  (state.icon === "right" && state.size === "xl" && state.state === "pressed")
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-39.svg"
                : state.state === "disabled"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icons-stroke-plus-38@2x.png"
                : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/line-2-41.svg"
            }
          />
        </>
      )}

      {(state.lineUp || (state.icon === "left" && state.state === "disabled")) && (
        <>
          <img
            className={`img ${acquistaClassName}`}
            alt="Line"
            src={
              !state.lineUp
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/icons-stroke-plus-38@2x.png"
                : img
            }
          />
          <div className={`acquista-5 size-5-${state.size} line-up-1-${state.lineUp} ${lineClassName}`}>{text}</div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.icon === "no" && state.lineUp === false && state.size === "sm" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "no",
          lineUp: false,
          size: "sm",
          state: "hover",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "sm" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "no",
          lineUp: false,
          size: "sm",
          state: "default",
        };

      case "click":
        return {
          icon: "no",
          lineUp: false,
          size: "sm",
          state: "pressed",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "xl" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "no",
          lineUp: false,
          size: "xl",
          state: "hover",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "xl" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "no",
          lineUp: false,
          size: "xl",
          state: "default",
        };

      case "click":
        return {
          icon: "no",
          lineUp: false,
          size: "xl",
          state: "pressed",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "xxl" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "no",
          lineUp: false,
          size: "xxl",
          state: "hover",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "xxl" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "no",
          lineUp: false,
          size: "xxl",
          state: "default",
        };

      case "click":
        return {
          icon: "no",
          lineUp: false,
          size: "xxl",
          state: "pressed",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "md" && state.state === "hover") {
    switch (action) {
      case "click":
        return {
          icon: "no",
          lineUp: false,
          size: "md",
          state: "pressed",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "sm" && state.state === "pressed") {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "no",
          lineUp: false,
          size: "sm",
          state: "default",
        };

      case "click":
        return {
          icon: "no",
          lineUp: false,
          size: "sm",
          state: "default",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "md" && state.state === "pressed") {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "no",
          lineUp: false,
          size: "md",
          state: "default",
        };

      case "click":
        return {
          icon: "no",
          lineUp: false,
          size: "md",
          state: "default",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "xl" && state.state === "pressed") {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "no",
          lineUp: false,
          size: "xl",
          state: "default",
        };

      case "click":
        return {
          icon: "no",
          lineUp: false,
          size: "xl",
          state: "default",
        };
    }
  }

  if (state.icon === "no" && state.lineUp === false && state.size === "xxl" && state.state === "pressed") {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "no",
          lineUp: false,
          size: "xxl",
          state: "default",
        };
    }
  }

  return state;
}

LinkText.propTypes = {
  stateProp: PropTypes.oneOf(["disabled", "pressed", "hover", "default"]),
  size: PropTypes.oneOf(["md", "xl", "xxl", "sm"]),
  icon: PropTypes.oneOf(["right", "no", "left"]),
  lineUp: PropTypes.bool,
  text: PropTypes.string,
  line: PropTypes.string,
  img: PropTypes.string,
};
