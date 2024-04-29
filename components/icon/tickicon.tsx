import React from "react";
import { Iconprop } from "../types";

function TickIcon({h,w,c}:Iconprop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M4.892 13.269l4.274 4.274L18.709 8"
      ></path>
    </svg>
  );
}

export default TickIcon;