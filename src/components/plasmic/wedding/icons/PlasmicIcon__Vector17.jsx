// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector17Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 109 2"}
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
        d={"M107.436 1H1"}
        stroke={"currentColor"}
        strokeWidth={"1.388"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeDasharray={"2.78 2.78"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
