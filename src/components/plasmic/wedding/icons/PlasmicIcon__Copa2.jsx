// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Copa2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 43"}
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
          "M24.543 3.545L35.997 15M1 1l18.453 16.544M30.615 1.18l-.691 16.183m8.444-8.091H22.17m13.827-5.727l-5.09 5.09m-1.91 8.273c-.212-.637-1.145-1.273-3.181-1.273-2.545 0-3.181 1.909-5.727 1.909-2.545 0-4.454-2.545-7-2.545-2.544 0-3.817 1.272-6.362 1.272-2.036 0-4.242-2.757-5.09-3.818"
        }
        stroke={"currentColor"}
        strokeWidth={"1.909"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.635 26.452c7.731 0 13.999-6.267 13.999-13.999 0-.869-.08-1.72-.231-2.545H1.867c-.151.826-.23 1.676-.23 2.546 0 7.73 6.267 13.998 13.998 13.998zm0 0v15.271h-7 14.636"
        }
        stroke={"currentColor"}
        strokeWidth={"2.1"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M29.128 17.465a8.271 8.271 0 10-7.126-7.956l8.268-.237-1.142 8.193z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.654"}
      ></path>
    </svg>
  );
}

export default Copa2Icon;
/* prettier-ignore-end */
