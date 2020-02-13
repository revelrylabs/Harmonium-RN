import * as Spacing from '../spacing'
import * as Typography from './typography'
import * as Headers from './headers'
import * as Cards from './cards'

export const emptyableCard = {
  ...Cards.card,
  marginTop: Spacing.globalMargin,
  paddingHorizontal: Spacing.globalPadding,
  paddingVertical: Spacing.globalPadding,
}
export const emptyableIcon = {
  resizeMode: 'contain',
  height: 150,
  marginVertical: Spacing.globalMargin,
}
export const emptyableHead = {
  ...Headers.h2,
  marginBottom: Spacing.marginBottomSmall,
}
export const emptyableText = {
  ...Typography.bodyCopy2,
  ...Typography.caption,
  textAlign: 'center',
}
