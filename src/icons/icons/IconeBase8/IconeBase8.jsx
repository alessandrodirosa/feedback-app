/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconeBase8 = ({ color = "#989898", className }) => {
  return (
    <svg
      className={`icone-base-8 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M7.38888 11.6666C7.49631 11.6666 7.58333 11.5796 7.58333 11.4722V7.58331H11.4722C11.5796 7.58331 11.6667 7.4963 11.6667 7.38887V6.61109C11.6667 6.50366 11.5796 6.41665 11.4722 6.41665H7.58333V2.52776C7.58333 2.42033 7.49631 2.33331 7.38888 2.33331H6.61111C6.50368 2.33331 6.41666 2.42033 6.41666 2.52776V6.41665H2.52777C2.42034 6.41665 2.33333 6.50366 2.33333 6.61109V7.38887C2.33333 7.4963 2.42034 7.58331 2.52777 7.58331H6.41666V11.4722C6.41666 11.5796 6.50368 11.6666 6.61111 11.6666H7.38888Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconeBase8.propTypes = {
  color: PropTypes.string,
};
