import * as Colors from'../colors'
import * as Fonts from'../fonts'
import * as Spacing from'../spacing'

//INPUT STACK WRAPPER
export const stackedInputWrapper = {
  marginBottom: Spacing.globalMargin,
};
//LABELS
export const label = {
  color: Colors.gray,
  fontFamily: Fonts.bodyFont,
  fontSize: Fonts.bodyFontSize,
};
//INPUTS
export const input = {
  borderColor: Colors.lightGray,
  borderWidth: 1,
  color: Colors.bodyColor,
  fontFamily: Fonts.bodyFont,
  fontSize: Fonts.bodyFontSize,
  padding: Spacing.globalPadding,
};
export const inputMinimal = {
  borderBottomColor: Colors.lightGray,
  borderBottomWidth: 1,
  color: Colors.bodyColor,
  fontFamily: Fonts.bodyFont,
  fontSize: Fonts.bodyFontSize,
  paddingVertical: Spacing.globalPadding,
};
