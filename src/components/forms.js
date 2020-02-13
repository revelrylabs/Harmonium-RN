import * as Colors from "../colors";
import * as Fonts from "../fonts";
import * as Spacing from "../spacing";
import * as Typography from "./typography";

// INPUT STACK WRAPPER
export const stackedInputWrapper = {
  marginBottom: Spacing.globalMargin
};
export const inputRowWrapper = {
  alignItems: "center",
  borderBottomColor: Colors.dividerColor,
  borderBottomWidth: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: Spacing.globalPadding
};
export const firstInputRowWrapper = {
  ...inputRowWrapper,
  borderTopColor: Colors.dividerColor,
  borderTopWidth: 1
};
export const checkboxListRow = {
  borderBottomColor: Colors.dividerColor,
  borderBottomWidth: 1,
  borderTopColor: Colors.dividerColor,
  borderTopWidth: 1,
  flexDirection: "column",
  paddingVertical: Spacing.globalPadding
};
// LABELS
export const label = {
  color: Colors.gray,
  fontFamily: Fonts.bodyFont,
  fontSize: Typography.bodyFontSize
};
// INPUTS
export const input = {
  borderColor: Colors.lightGray,
  borderWidth: 1,
  color: Colors.bodyColor,
  fontFamily: Fonts.bodyFont,
  fontSize: Typography.bodyFontSize,
  padding: Spacing.globalPadding
};
export const inputMinimal = {
  borderBottomColor: Colors.lightGray,
  borderBottomWidth: 1,
  color: Colors.bodyColor,
  fontFamily: Fonts.bodyFont,
  fontSize: Typography.bodyFontSize,
  paddingVertical: Spacing.globalPadding
};
