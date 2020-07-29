import { StyleSheet } from 'react-native'
import { Colors, Fonts, Spacing, Typography } from '../styles'

export default StyleSheet.create({
  h1: {
    backgroundColor: 'transparent',
    color: Colors.headerColor,
    fontFamily: Fonts.headerFont,
    fontSize: Typography.h1,
    marginBottom: Spacing.globalMarginLarge,
    marginTop: Spacing.globalMarginLarge,
    textAlign: 'center'
  },
  body: {
    fontSize: bodyFontSize,
    lineHeight: bodyLineHeight
  },
  bodyLarge: {
    fontSize: bodyFontSizeLarge,
    lineHeight: bodyLineHeightLarge
  },
  bodySmall: {
    fontSize: bodyFontSizeSmall,
    lineHeight: bodyLineHeightSmall
  },
  helpText: {
    color: Colors.gray,
    fontFamily: Fonts.bodyFont,
    fontSize: bodyFontSizeSmall,
    marginBottom: Spacing.globalMarginLarge
  }
})
