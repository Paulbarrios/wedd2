// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rings2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 42"}
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
          "M16.251 11.765c-7.723 0-13.984 6.26-13.984 13.984 0 7.723 6.261 13.983 13.984 13.983s13.984-6.26 13.984-13.983c0-7.723-6.26-13.984-13.984-13.984zM0 25.749C0 16.773 7.276 9.497 16.25 9.497c8.976 0 16.252 7.276 16.252 16.252C32.503 34.724 25.227 42 16.25 42 7.276 42 0 34.724 0 25.749z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M35.904 11.765c-7.723 0-13.984 6.26-13.984 13.983 0 7.723 6.26 13.984 13.984 13.984 7.723 0 13.983-6.26 13.983-13.984 0-7.723-6.26-13.983-13.983-13.983zM19.652 25.748c0-8.975 7.276-16.251 16.252-16.251 8.975 0 16.251 7.276 16.251 16.251C52.155 34.724 44.88 42 35.904 42s-16.252-7.276-16.252-16.252zM23.119.143c-.25.072-.699.374-.996.672-1.665 1.665-.698 4.38 2.574 7.227.6.522 1.234.987 1.408 1.032.411.106 1.09-.366 2.508-1.745 2.376-2.31 3.175-4.497 2.213-6.055C30.434.641 29.66.147 28.89.042c-.754-.103-1.915.336-2.35.888l-.276.351-.221-.316c-.281-.402-1.51-.98-2.053-.965a4.21 4.21 0 00-.871.143z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rings2Icon;
/* prettier-ignore-end */
