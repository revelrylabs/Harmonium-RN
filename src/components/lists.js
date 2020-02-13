import {Dimensions} from 'react-native'
export const fullWidth = Dimensions.get('window').width

import * as Colors from '../colors'
import * as Spacing from '../spacing'

export const listItem = {
  borderBottomColor: Colors.dividerColor,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  width: fullWidth,
  // flexDirection: 'row',
  padding: Spacing.globalPadding,
  flex: 1,
};
