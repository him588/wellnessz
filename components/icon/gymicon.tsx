import React from "react";
import { Iconprop } from "../types";

function GymIcon({h,w,c}:Iconprop) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={h}
    viewBox="0 0 32 32"
  >
    <path
      fill={c}
      d="M32 15.467h-3.147v-6.4h-3.2V6.4h-4.267v9.067H10.719V6.4H6.452v2.667h-3.2v6.4H-.001v1.067h3.253v6.4h3.2v2.667h4.267v-9.067h10.667v9.067h4.267v-2.667h3.2v-6.4H32v-1.067zm-27.68 6.4V10.134h2.133v11.733H4.32zm5.333 2.666H7.52V7.466h2.133v17.067zm14.934 0h-2.133V7.466h2.133v17.067zm3.2-2.666h-2.133V10.134h2.133v11.733z"
    ></path>
  </svg>
  );
}

export default GymIcon;