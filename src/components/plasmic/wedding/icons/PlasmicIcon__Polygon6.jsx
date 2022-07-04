// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Polygon6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 428 494"}
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
          "M1.592 124.366L214 1.732l212.408 122.634v245.268L214 492.268 1.592 369.634V124.366z"
        }
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeWidth={"3"}
      ></path>
    </svg>
  );
}

export default Polygon6Icon;
/* prettier-ignore-end */
