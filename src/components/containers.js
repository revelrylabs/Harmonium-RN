import { Dimensions } from "react-native";
export const fullHeight = Dimensions.get("window").width;
export const fullWidth = Dimensions.get("window").width;

import * as Colors from "../colors";
import * as Spacing from "../spacing";

export const pageWrapper = {
  backgroundColor: Colors.lightestGray,
  flex: 1,
  width: fullWidth
};
export const base = {
  backgroundColor: Colors.lightestGray,
  paddingHorizontal: Spacing.globalPadding,
  paddingVertical: Spacing.globalPaddingLarge,
  width: fullWidth
};
export const container = {
  ...base
};
export const containerExpand = {
  ...base,
  flex: 1
};
export const verticalSpaceBetween = {
  ...base,
  flex: 1,
  flexDirection: "column",
  height: fullHeight,
  justifyContent: "space-between"
};
export const horizontalSpaceAround = {
  ...verticalSpaceBetween,
  flexDirection: "row",
  justifyContent: "space-around",
  padding: Spacing.globalPadding
};
export const horizontalVerticalMiddle = {
  // Aligns item in the middle both horizontally and vertically
  ...base,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};
