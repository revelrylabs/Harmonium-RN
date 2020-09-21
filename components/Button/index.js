import React from 'react'
import { PropTypes } from 'prop-types'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import Typography from '../Typography'
import styles from './styles'

export default function Button ({
  onPress,
  title,
  isLoading,
  variant = 'primary',
  disabled,
  containerStyle = {},
  buttonStyle = {},
  textStyle = {}
}) {
  variant = disabled ? 'disabled' : variant
  const variantStyles = styles[variant]
  const textStyles = styles[`${variant}Text`]

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {disabled ? (
        <View style={{ ...variantStyles, ...buttonStyle }}>
          <Typography overrides={{ ...textStyles, ...textStyle }}>
            {title}
          </Typography>
        </View>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={{ ...variantStyles, ...buttonStyle }}
        >
          <View>
            {isLoading && (
              <View style={styles.loadingIndicator}>
                <ActivityIndicator color={colors.white} size='small' />
              </View>
            )}
            <Typography overrides={{ ...textStyles, ...textStyle }}>
              {title}
            </Typography>
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  containerStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  isLoading: PropTypes.bool
}
