import { StyleSheet } from 'react-native'
import merge from 'lodash.merge'

import { black } from './colors'

import defaultTheme from './themes/default'

export default function getTheme (theme = {}, ...more) {
  let mergedTheme = merge(defaultTheme, theme, ...more)

  const { spacing, fontFamily, typography, palette } = mergedTheme
  const baseTheme = {
    spacing,
    fontFamily,
    typography,
    palette
  }

  mergedTheme = merge(
    {
      button: StyleSheet.create(
        merge(
          {
            container: {
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 16,
              borderRadius: 3,
              flexDirection: 'row'
            },
            text: {
              ...typography.buttons,
              color: black
            }
          },
          mergedTheme.button
        )
      ),
      buttonDisabled: StyleSheet.create(
        merge(
          {
            container: {
              backgroundColor: palette.disabledColor
            },
            text: {
              color: palette.disabledTextColor
            }
          },
          mergedTheme.buttonDisabled
        )
      )
    },
    baseTheme
  )

  return mergedTheme
}
