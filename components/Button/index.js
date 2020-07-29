import {PropTypes} from 'prop-types'
import {ActivityIndicator, TouchableHighlight, Text} from 'react-native'
import styles from './styles'

export default function Button({
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
    <View style={{...styles.container, ...containerStyle}}>
      <TouchableHighlight
        onPress={onPress}
        style={{...variantStyles, ...buttonStyle}}
      >
        {isLoading && (
          <View style={styles.loadingIndicator}>
            <ActivityIndicator color={colors.white} size="small" />
          </View>
        )}
        <Text style={{...textStyles, textStyle}}>{title}</Text>
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
  isLoading: PropTypes.bool,
}