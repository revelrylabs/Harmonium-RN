import { StyleSheet } from 'react-native'
import { Colors, Fonts, Spacing, Typography } from '../../variables'

const base = {
  flex: 1,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 3
}

const baseText = {
  color: Colors.bodyColor,
  fontFamily: Fonts.bodyFont,
  fontSize: Typography.bodyLarge,
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
    borderColor: Colors.primary,
    borderStyle: 'solid',
    borderWidth: 1
  },
  secondaryText: {
    ...baseText,
    color: Colors.primary
  },
  disabled: {
    ...base,
    backgroundColor: Colors.lightGray
  },
  disabledText: {
    ...baseText,
    color: Colors.gray
  },
  loadingIndicator: {
    margin: Spacing.globalPaddingSmall
  }
})
