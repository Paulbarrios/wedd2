// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UnionIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 46"}
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
        d={
          "M19.067.19c4.56.847 8.32 3.31 10.863 7.118 2.105 3.152 3.05 7.221 2.553 11.005-.236 1.804-.8 3.682-1.554 5.175-.358.711-14.495 21.556-14.618 21.556-.132 0-14.257-20.838-14.635-21.59C-1.407 17.31-.156 9.75 4.761 4.82 7.4 2.174 10.471.624 14.116.1c1.143-.165 3.842-.116 4.951.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
