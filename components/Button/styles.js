import { StyleSheet } from 'react-native'
import { Colors, Fonts, Spacing, Typography } from '../styles'

const base = {
  flex: 1,
  height: 60,
  justifyContent: 'center'
}

const baseText = {
  color: Colors.bodyColor,
  fontFamily: Fonts.bodyFont,
  fontSize: Typography.body,
  textAlign: 'center'
}

export default StyleSheet.create({
  base,
  baseText,
  container: {
    flexDirection: 'row',
    marginBottom: Spacing.globalMarginLarge
  },
  // SIZES
  small: {
    height: 40
  },
  narrow: {
    width: 200
  },
  // VARIANTS
  primary: {
    ...base,
    backgroundColor: Colors.primary
  },
  primaryText: {
    ...baseText
  },
  secondary: {
    ...base,
    backgroundColor: 'transparent',
    borderColor: Colors.lightGray,
    borderStyle: 'solid',
    borderWidth: 1
  },
  secondaryText: {
    ...baseText,
    color: Colors.bodyColor
  },
  disabled: {
    ...base,
    backgroundColor: 'transparent'
  },
  disabledText: {
    ...baseText
  },
  loadingIndicator: {
    margin: Spacing.globalPaddingSmall
  }
})
