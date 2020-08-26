import React from 'react';
import { PropTypes } from 'prop-types'
import { ActivityIndicator, TouchableHighlight, View } from 'react-native'
import Typography from '../Typography'
import styles from './styles'

export default function Button ({
  onPress,
  title,
  isLoading,
  variant = 'primary',
  containerStyle = {},
  buttonStyle = {},
  textStyle = {}
}) {
  const variantStyles = styles[variant]
  const textStyles = styles[`${variant}Text`]

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <TouchableHighlight
        onPress={onPress}
        style={{ ...variantStyles, ...buttonStyle }}
      >
        <View>
          {isLoading && (
            <View style={styles.loadingIndicator}>
              <ActivityIndicator color={colors.white} size='small' />
            </View>
          )}
          <Typography overrides={{ ...textStyles, textStyle }}>
            {title}
          </Typography>
        </View>
      </TouchableHighlight>
    </View>
  )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  containerStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  isLoading: PropTypes.bool
}
