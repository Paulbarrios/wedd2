// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CopaIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 48"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.438 4.75l12.375 12.375M2 2l19.938 17.875m12.06-17.68L33.25 19.68m9.124-8.742h-17.5M39.813 4.75l-5.5 5.5m-2.063 8.938c-.23-.688-1.238-1.375-3.438-1.375-2.75 0-3.437 2.062-6.187 2.062-2.75 0-4.813-2.75-7.563-2.75S10.939 18.5 8.189 18.5c-2.2 0-4.584-2.98-5.5-4.125"
        }
        stroke={"currentColor"}
        strokeWidth={"2.063"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.813 29.5c8.353 0 15.125-6.772 15.125-15.125 0-.94-.086-1.858-.25-2.75H2.937c-.164.892-.25 1.81-.25 2.75 0 8.353 6.772 15.125 15.126 15.125zm0 0V46H10.25h15.813"
        }
        stroke={"currentColor"}
        strokeWidth={"2.269"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M32.392 19.79a8.938 8.938 0 10-7.7-8.597l8.933-.255-1.233 8.851z"}
        stroke={"currentColor"}
        strokeWidth={"1.788"}
      ></path>
    </svg>
  );
}

export default CopaIcon;
/* prettier-ignore-end */
