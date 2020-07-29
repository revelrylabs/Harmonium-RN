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
    fontSize: Typography.body,
    lineHeight: Typography.bodyLineHeight
  },
  bodyLarge: {
    fontSize: Typography.bodyLarge,
    lineHeight: Typography.bodyLineHeightLarge
  },
  bodySmall: {
    fontSize: Typography.bodySmall,
    lineHeight: Typography.bodyLineHeightSmall
  },
  helpText: {
    color: Colors.gray,
    fontFamily: Fonts.bodyFont,
    fontSize: Typography.bodySmall,
    marginBottom: Spacing.globalMarginLarge
  }
})
