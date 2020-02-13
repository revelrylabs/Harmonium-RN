import {StyleSheet} from 'react-native'
import {Colors, Icons, Spacing} from '../../styles'

const topBarStyles = {
  logoWrapper: {
    flexGrow: 1,
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 120,
  },
  notification: {
    paddingHorizontal: Spacing.globalPadding,
  },
  notificationIcon: {
    ... Icons.base,
  },
  badge: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    color: Colors.white,
    height: 20,
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    right: Spacing.globalPaddingSmaller,
    top: -5,
    width: 20,
  },
  badgeText: {
    color: Colors.white,
    lineHeight: 20,
    textAlign: 'center',
    width: 20,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...topBarStyles, ...overrides})
}

export default {
  createStyles,
}
