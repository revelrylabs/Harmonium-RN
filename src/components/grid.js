import * as Spacing from '../spacing'

export const row = {
  flexDirection: 'row',
  flexWrap: 'wrap',
}
export const baseCol = {
  paddingHorizontal: Spacing.globalPaddingSmall,
}
export const col = {
  ...baseCol,
  width: '100%',
}
export const col5 = {
  ...baseCol,
  width: '41.66667%',
}
export const col6 = {
  ...baseCol,
  width: '50%',
}
export const col7 = {
  ...baseCol,
  width: '58.33333%',
}
