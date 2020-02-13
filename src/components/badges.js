import * as Colors from '../colors'
import * as Fonts from '../fonts'
import * as Spacing from '../spacing'
import * as Typography from './typography'

// Badges
export const badgeContainer = {
  flexDirection: 'row',
  marginBottom: Spacing.globalMarginLarge,
}
export const base = {
  borderRadius: 100,
  paddingHorizontal: Spacing.globalPaddingSmaller,
  paddingVertical: Spacing.globalPaddingTiny,
  justifyContent: 'center',
}
export const baseText = {
  fontSize: Typography.bodyFontSizeMedium,
  lineHeight: Typography.bodyLineHeightSmall,
  fontFamily: Fonts.bodyFont,
  color: Colors.white,
  textAlign: 'center',
}

export const badgeSuccess = {
  ...base,
  backgroundColor: Colors.success,
}
export const badgeSuccessText = {
  ...baseText,
}
export const badgeWarning = {
  ...base,
  backgroundColor: Colors.warning,
}
export const badgeWarningText = {
  ...baseText,
}
export const badgeAlert = {
  ...base,
  backgroundColor: Colors.alert,
}
export const badgeAlertText = {
  ...baseText,
}
