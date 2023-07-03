/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IosStatusIco } from "../../icons/IosStatusIco";
import { IosStatusBattery } from "../IosStatusBattery";
import { IosStatusSim } from "../IosStatusSim";
import { IosStatusWifi } from "../IosStatusWifi";
import "./style.css";

export const IosStatusBar = ({
  state,
  notch,
  className,
  elementClassName,
  elementAmClassName,
  iosStatusSimVec = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/vec-5.svg",
  iosStatusWifiSignalHigh = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/ios-status-wifi-1.svg",
  iosStatusBatteryBatteryFillClassName,
  iosStatusBatteryBatteryFrame = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/battery-frame-7.svg",
}) => {
  return (
    <div className={`ios-status-bar notch-${notch} ${state} ${className}`}>
      <div className="sec">
        {((notch === "no" && state === "call") ||
          (notch === "no" && state === "default") ||
          (notch === "no" && state === "location") ||
          (notch === "no" && state === "recording")) && (
          <>
            <IosStatusSim
              type="single"
              typeSingleClassName="ios-status-sim"
              vec={
                state === "default"
                  ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/vec-4.svg"
                  : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/vec-13.svg"
              }
            />
            <div className="carrier">Carrier</div>
          </>
        )}

        {state === "back" && notch === "no" && (
          <>
            <IosStatusIco className="ios-status-ico" />
            <div className="app">App</div>
          </>
        )}

        {notch === "no" && (
          <IosStatusWifi
            className="ios-status-wifi-instance"
            signal="high"
            signalHigh={
              state === "default"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/ios-status-wifi-11.svg"
                : state === "location"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/ios-status-wifi-9.svg"
                : state === "back"
                ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/ios-status-wifi-10.svg"
                : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/ios-status-wifi-8.svg"
            }
          />
        )}

        {(notch === "island" ||
          (notch === "yes" && state === "call") ||
          (notch === "yes" && state === "default") ||
          (notch === "yes" && state === "location") ||
          (notch === "yes" && state === "recording")) && (
          <div className="element-wrapper">
            <div className={`element ${elementClassName}`}>10:00</div>
          </div>
        )}

        {state === "back" && notch === "yes" && (
          <>
            <div className="div-wrapper">
              <div className="element-2">10:00</div>
            </div>
            <div className="sec-2">
              <IosStatusIco className="ios-status-ico" />
              <div className="app">App</div>
            </div>
          </>
        )}
      </div>
      <div className={`element-AM ${elementAmClassName}`}>{notch === "no" && <>10:00 AM</>}</div>
      <div className="sec-3">
        {notch === "no" && <div className="element-3">100%</div>}

        {["island", "yes"].includes(notch) && (
          <>
            <IosStatusSim type="single" typeSingleClassName="ios-status-sim" vec={iosStatusSimVec} />
            <IosStatusWifi className="ios-status-wifi-instance" signal="high" signalHigh={iosStatusWifiSignalHigh} />
          </>
        )}

        <IosStatusBattery
          batteryFillClassName={`${notch === "no" && ["call", "location", "recording"].includes(state) && "class"} ${
            ["island", "yes"].includes(notch) && iosStatusBatteryBatteryFillClassName
          }`}
          batteryFrame={
            notch === "no" && ["back", "default"].includes(state)
              ? "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/battery-frame-17.svg"
              : ["island", "yes"].includes(notch)
              ? iosStatusBatteryBatteryFrame
              : "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/battery-frame-15.svg"
          }
          charge={false}
          className="ios-status-battery-2"
          overlapGroupClassName="ios-status-battery-instance"
          type="high"
          vecClassName="instance-node"
        />
      </div>
    </div>
  );
};

IosStatusBar.propTypes = {
  state: PropTypes.oneOf(["back", "default", "location", "call", "recording"]),
  notch: PropTypes.oneOf(["island", "yes", "no"]),
  iosStatusSimVec: PropTypes.string,
  iosStatusWifiSignalHigh: PropTypes.string,
  iosStatusBatteryBatteryFrame: PropTypes.string,
};
