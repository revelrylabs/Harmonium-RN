import {Dimensions} from 'react-native'
export const fullHeight = Dimensions.get('window').width
export const fullWidth = Dimensions.get('window').width

import * as Colors from '../colors'
import * as Global from '../global'
import * as Spacing from '../spacing'

export const baseCard = {
  backgroundColor: Colors.white,
  borderColor: Colors.dividerColor,
  borderStyle: 'solid',
  borderWidth: 1,
}

export const card = {
  ...baseCard,
  borderRadius: Global.globalRadius,
  marginBottom: Spacing.globalMargin,
}

export const cardExpanded = {
  ...baseCard,
  width: fullWidth,
  flex: 1,
}
