import Color from 'color'
import typography from '../typography'
import fonts from '../fonts'
import spacing from '../spacing'
import {
  white,
  black,
  grey300,
  grey500,
  deepPurpleA700,
  deepPurpleA100
} from '../colors'

export default {
  fonts,
  typography,
  spacing,
  iconSet: 'MaterialIcons',
  palette: {
    // main theme colors
    primaryColor: deepPurpleA700,
    accentColor: deepPurpleA100,
    // text color palette
    primaryTextColor: Color(black)
      .alpha(0.87)
      .toString(),
    secondaryTextColor: Color(black)
      .alpha(0.54)
      .toString(),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: Color(black)
      .alpha(0.12)
      .toString(),
    disabledColor: grey300,
    disabledTextColor: grey500,
    activeIcon: Color(black)
      .alpha(0.54)
      .toString(),
    inactiveIcon: Color(black)
      .alpha(0.38)
      .toString()
  }
}
