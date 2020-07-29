
import {StyleSheet} from 'react-native'
import {Colors, Fonts, Spacing} from'../styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: Spacing.globalMarginLarge,
  },
  base: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
  },
  baseText: {
    color: Colors.bodyColor,
    fontFamily: Fonts.bodyFont,
    fontSize: Fonts.bodyFontSize,
    textAlign: 'center',
  },
  // SIZES
  small: {
    height: 40,
  },
  narrow: {
    width: 200,
  },
  // VARIANTS
  primary: {
    ...base,
    backgroundColor: Colors.ochsnerGold,
  },
  primaryText: {
    ...baseText,
  },
  secondary: {
    ...base,
    backgroundColor: 'transparent',
    borderColor: Colors.lightGray,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  secondaryText: {
    ...baseText,
    color: Colors.bodyColor,
  },
  disabled: {
    ...base,
    backgroundColor: 'transparent',
  },
  disabledText: {
    ...baseText,
  },
  loadingIndicator: {
    margin: globalPaddingSmall,
  },
})
