import React from 'react'
import PropTypes from 'prop-types'
import {Text, TouchableOpacity, View} from 'react-native'
import {Colors} from '../../variables'
import styles from './styles'

function wrapperStyles ({align = 'left'}) {
  const alignLookup = {
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
  }

  return {
    alignItems: alignLookup[align],
  }
}

function TextContent ({
  variant = 'body',
  align = 'left',
  color = 'bodyColor',
  children,
  numberOfLines,
  textDecorationLine = 'none',
  overrides = {},
}) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        ...styles[variant],
        ...{
          color: Colors[color] || Colors.bodyColor,
          textAlign: align,
          textDecorationLine,
        },
        ...overrides,
      }}>
      {children}
    </Text>
  )
}

TextContent.propTypes = {
  numberOfLines: PropTypes.number,
  textDecorationLine: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
}

function Typography ({hide = false, onPress, ...props}) {
  if (hide) {
    return null
  }

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={wrapperStyles(props)}>
        <TextContent {...props} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={wrapperStyles(props)}>
      <TextContent {...props} />
    </View>
  )
}

Typography.propTypes = {
  space: PropTypes.object,
  hide: PropTypes.bool,
  onPress: PropTypes.func,
}

export default Typography
