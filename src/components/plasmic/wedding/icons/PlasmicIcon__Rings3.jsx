// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rings3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 143"}
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
          "M15.757 112.771c-7.488 0-13.558 6.071-13.558 13.559 0 7.488 6.07 13.559 13.558 13.559 7.489 0 13.56-6.071 13.56-13.559 0-7.488-6.071-13.559-13.56-13.559zM0 126.33c0-8.703 7.055-15.757 15.757-15.757 8.703 0 15.758 7.054 15.758 15.757s-7.055 15.757-15.758 15.757C7.055 142.087 0 135.033 0 126.33z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M34.813 112.771c-7.489 0-13.56 6.071-13.56 13.559 0 7.488 6.071 13.559 13.56 13.559 7.488 0 13.558-6.071 13.558-13.559 0-7.488-6.07-13.559-13.558-13.559zM19.055 126.33c0-8.703 7.055-15.757 15.758-15.757 8.702 0 15.757 7.054 15.757 15.757s-7.055 15.757-15.757 15.757c-8.703 0-15.758-7.054-15.758-15.757zM22.416.116c-.242.059-.677.305-.966.547-1.614 1.356-.676 3.566 2.496 5.882.583.426 1.197.804 1.365.84.4.087 1.057-.297 2.433-1.42 2.303-1.88 3.078-3.66 2.145-4.928-.38-.516-1.131-.917-1.876-1.003-.73-.084-1.857.273-2.279.723l-.268.286-.214-.258C24.979.458 23.787-.012 23.26 0a4.803 4.803 0 00-.844.116z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rings3Icon;
/* prettier-ignore-end */
