// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WalletTracedIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M1.396.365C.016 1.063-.058 1.58.022 9.838c.073 7.564.085 7.695.73 8.34.645.645.76.655 8.83.738 7.908.082 8.194.066 8.763-.503.557-.558.588-.925.588-7.147 0-5.208-.084-6.674-.408-7.117-.383-.524-.913-.567-8.555-.702l-8.148-.144V1.865l6.943-.077c5.716-.063 7.005-.152 7.296-.503.28-.338.28-.516-.004-.858-.3-.361-1.46-.43-7.153-.427-4.872.003-6.996.107-7.508.365zm15.285 9.597c1.091.987.323 2.975-1.15 2.975a1.742 1.742 0 01-1.299-2.925c.593-.655 1.755-.68 2.45-.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WalletTracedIcon;
/* prettier-ignore-end */
