// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function RingsIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 16"}
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
          "M6.055 4.383a5.21 5.21 0 100 10.42 5.21 5.21 0 000-10.42zM0 9.593a6.055 6.055 0 1112.11 0 6.055 6.055 0 01-12.11 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.377 4.383a5.21 5.21 0 100 10.42 5.21 5.21 0 000-10.42zm-6.055 5.21a6.055 6.055 0 1112.11 0 6.055 6.055 0 01-12.11 0zM8.614.053c-.094.027-.26.14-.372.25-.62.621-.26 1.633.96 2.693.223.195.46.368.524.385.153.04.406-.137.935-.65.885-.861 1.183-1.676.824-2.256a1.053 1.053 0 00-.72-.46c-.282-.038-.715.126-.876.331l-.103.131L9.703.36C9.598.21 9.14-.005 8.938 0a1.568 1.568 0 00-.324.053z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RingsIcon;
/* prettier-ignore-end */
