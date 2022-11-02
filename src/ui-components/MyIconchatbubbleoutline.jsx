/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function MyIconchatbubbleoutline(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L4 14L2 16L2 2L18 2L18 14Z",
          fill: "rgba(13,26,38,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "MyIconchatbubbleoutline")}
    ></Icon>
  );
}
