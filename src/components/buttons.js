import { Dimensions } from "react-native";
const fullWidth = Dimensions.get("window").width;

import * as Colors from "../colors";
import * as Fonts from "../fonts";
import * as Spacing from "../spacing";
import * as Icons from "./icons";
import * as Typography from "./typography";

export const buttonSmallTextSize = Typography.bodyFontSizeMedium;

// BUTTONS
export const container = {
  flexDirection: "row",
  marginBottom: Spacing.globalMarginLarge
};
export const base = {
  borderRadius: 3,
  flex: 1,
  justifyContent: "center",
  paddingVertical: Spacing.globalPadding,
  paddingHorizontal: Spacing.globalPaddingSmaller
};
export const baseText = {
  color: Colors.white,
  fontFamily: Fonts.bodyFont,
  fontSize: Typography.bodyFontSize,
  textAlign: "center"
};
//button sizes
export const small = {
  paddingVertical: Spacing.globalPaddingSmall,
  paddingHorizontal: Spacing.globalPaddingSmaller
};
export const smallText = {
  ...baseText,
  fontSize: buttonSmallTextSize
};
export const narrow = {
  width: 200
};
export const half = {
  width: "50%"
};
//button types
export const primary = {
  ...base,
  backgroundColor: Colors.buttonPrimaryBkgd
};
export const primaryText = {
  ...baseText
};

export const secondary = {
  ...base,
  backgroundColor: Colors.buttonSecondaryBkgd,
  borderColor: Colors.lightGray,
  borderStyle: "solid",
  borderWidth: 1
};
export const secondaryText = {
  ...baseText,
  color: Colors.bodyColor
};
export const secondaryBlue = {
  ...base,
  backgroundColor: Colors.buttonSecondaryBkgd,
  borderColor: Colors.brandBlue,
  borderStyle: "solid",
  borderWidth: 1
};
export const secondaryBlueText = {
  ...baseText,
  color: Colors.brandBlue
};
export const smallSecondaryBlueText = {
  ...secondaryBlueText,
  fontSize: buttonSmallTextSize
};

export const disabled = {
  ...base,
  backgroundColor: "transparent"
};
export const disabledText = {
  ...baseText
};
export const white = {
  ...base,
  backgroundColor: Colors.buttonWhiteBkgd
};
export const whiteText = {
  ...baseText,
  color: Colors.brandPrimary
};
export const linkWhite = {
  ...base,
  backgroundColor: "transparent"
};
export const linkWhiteText = {
  ...baseText
};
export const buttonIconLeft = {
  // apply to the icon when the icon is on the left side of the text in a button
  ...Icons.iconLeft
};
