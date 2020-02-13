import * as Colors from'../colors'
import * as Fonts from'../fonts'
import * as Spacing from'../spacing'

export const h1Size = 32
export const h2Size = 24
export const h3Size = 22
export const h4Size = 18
export const h5Size = 16
export const h6Size = 11

export const h1 = {
  backgroundColor: 'transparent',
  color: Colors.headerColor,
  fontFamily: Fonts.headerFont,
  fontSize: h1Size,
  marginBottom: Spacing.globalMargin,
  marginTop: Spacing.globalMarginSmaller,
  textAlign: 'center',
};
export const h2 = {
  backgroundColor: 'transparent',
  color: Colors.headerColor,
  fontFamily: Fonts.headerFont,
  fontSize: h2Size,
  marginBottom: Spacing.globalMargin,
  textAlign: 'center',
};
export const h3 = {
  color: Colors.headerColor,
  fontFamily: Fonts.headerFont,
  fontSize: h3Size,
};
export const h4 = {
  color: Colors.headerColor,
  fontFamily: Fonts.headerFont,
  fontSize: h4Size,
};
export const h5 = {
  color: Colors.headerColor,
  fontFamily: Fonts.bodyFontBold,
  fontSize: h5Size,
  marginTop: Spacing.globalMarginLarge,
};
export const h6 = {
  color: Colors.headerColor,
  fontFamily: Fonts.bodyFontBold,
  fontSize: h6Size,
  textTransform: 'uppercase',
};
