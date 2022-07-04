// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GasStationTracedIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 11"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.717.308C.427.598.413.814.413 4.815c0 3.68-.03 4.237-.249 4.478-.202.224-.213.317-.057.505.16.194.726.23 3.496.23s3.335-.036 3.496-.23c.156-.188.145-.281-.058-.505-.169-.187-.249-.552-.249-1.137v-.861h1.331l.066.91c.107 1.488 1.034 2.146 2.21 1.57.848-.415.945-.744.948-3.213l.002-2.175-.851-.893a12.42 12.42 0 00-1.824-1.526c-.801-.522-1.011-.6-1.198-.444-.348.288-.284.421.456.943.648.457.683.52.683 1.212 0 .94.36 1.338 1.215 1.338h.608v1.868c0 1.961-.083 2.233-.684 2.233-.514 0-.683-.308-.683-1.246 0-1.185-.294-1.488-1.443-1.488h-.836V3.498c0-3.767.25-3.494-3.19-3.494C1.224.004.998.028.718.308zm5.164 1.975V3.65H1.325V.916H5.88v1.367z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GasStationTracedIcon;
/* prettier-ignore-end */
