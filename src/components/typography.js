import * as Colors from "../colors";
import * as Fonts from "../fonts";
import * as Spacing from "../spacing";

export const bodyFontSize = 16;
export const bodyFontSizeLarge = 18;
export const bodyFontSizeMedium = 14;
export const bodyFontSizeSmall = 12;
export const bodyFontSizeTiny = 8;

export const fontWeightNormal = "400";
export const fontWeightMedium = "600";
export const fontWeightBold = "700";

export const bodyLineHeight = 28;
export const bodyLineHeightLarge = 30;
export const bodyLineHeightSmall = 20;

export const iconFontSize = 18;

export const bodyCopy = {
  fontSize: bodyFontSize,
  fontWeight: fontWeightNormal,
  lineHeight: bodyLineHeight
};
export const bodyCopy2 = {
  fontSize: bodyFontSize,
  lineHeight: bodyLineHeight,
  marginBottom: Spacing.globalMargin,
  marginTop: Spacing.globalMargin
};
export const bodyCopyLarge = {
  fontSize: bodyFontSizeLarge,
  lineHeight: bodyLineHeightLarge
};
export const bodyCopyLargeBold = {
  fontSize: bodyFontSizeLarge,
  lineHeight: bodyLineHeightLarge
};
export const bodyCopyMedium = {
  fontSize: bodyFontSizeMedium,
  lineHeight: bodyLineHeightSmall
};
export const bodyCopySmall = {
  fontSize: bodyFontSizeSmall,
  lineHeight: bodyLineHeightSmall
};
export const helpText = {
  color: Colors.gray,
  fontFamily: Fonts.bodyFont,
  fontSize: bodyFontSizeSmall,
  marginBottom: Spacing.globalMarginLarge
};
export const textLink = {
  color: Colors.brandPrimary,
  fontSize: bodyFontSize
};
export const textLinkSmall = {
  ...textLink,
  fontSize: bodyFontSizeSmall
};
export const iconLink = {
  alignItems: "center",
  color: Colors.brandBlue,
  flexDirection: "row",
  flexWrap: "nowrap"
};
export const iconLinkIcon = {
  color: Colors.brandBlue,
  marginRight: Spacing.globalMarginTiny
};
export const iconLinkText = {
  color: Colors.brandBlue
};
export const caption = {
  color: Colors.gray60
};
