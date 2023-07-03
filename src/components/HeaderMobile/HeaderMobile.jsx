/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconAccountStyleStroke } from "../../icons/IconAccountStyleStroke";
import { IconMenuStyleStroke } from "../../icons/IconMenuStyleStroke";
import { WardrobeOutline1 } from "../../icons/WardrobeOutline1";
import { Logo } from "../Logo";
import "./style.css";

export const HeaderMobile = ({
  className,
  logoDarkModeTrue = "https://generation-sessions.s3.amazonaws.com/229c6a359aedd442784950154788f0b4/img/logo-1.svg",
  icon = <WardrobeOutline1 className="wardrobe-outline" />,
}) => {
  return (
    <div className={`header-mobile ${className}`}>
      <Logo className="logo-instance" darkMode darkModeTrue={logoDarkModeTrue} />
      <IconMenuStyleStroke className="icone-base" />
      <IconAccountStyleStroke className="icon-account-style-stroke" />
      {icon}
    </div>
  );
};

HeaderMobile.propTypes = {
  logoDarkModeTrue: PropTypes.string,
};
