import * as Colors from "../colors";
import * as Spacing from "../spacing";

export const iconSizeDefault = 18;

export const base = {
  color: Colors.brandBlue,
  height: 28,
  width: 28
};
export const small = {
  ...base,
  height: iconSizeDefault,
  width: iconSizeDefault
};
export const large = {
  ...base,
  height: 64,
  width: 64
};
export const accent = {
  ...base,
  color: Colors.brandPrimary
};
export const accentIconContainer = {
  alignItems: "center",
  borderColor: Colors.brandPrimary,
  borderRadius: 100,
  borderWidth: 1,
  justifyContent: "center",
  height: 100,
  width: 100
};
export const iconLeft = {
  // Apply when an icon is on the left side of text
  marginRight: Spacing.globalMarginSmaller
};
export const iconRight = {
  // Apply when an icon is on the right side of text
  marginLeft: Spacing.globalMarginSmaller
};
