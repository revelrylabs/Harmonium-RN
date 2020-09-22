import React from 'react'
import { PropTypes } from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import { transparent } from '../styles/colors'
import withTheme from '../styles/withTheme'

function getStyles (props) {
  const { primary, accent, secondary, disabled, theme } = props
  const { button, buttonDisabled, palette } = theme

  const local = {
    container: {}
  }

  if (!disabled) {
    if (primary) {
      local.container = { backgroundColor: palette.primaryColor }
    } else if (accent) {
      local.container = { backgroundColor: palette.accentColor }
    } else if (secondary) {
      local.container = {
        borderWidth: 1,
        borderColor: palette.primaryColor,
        backgroundColor: transparent
      }
      local.text = { color: palette.primaryColor }
    }
  }

  return {
    container: [
      button.container,
      disabled && buttonDisabled.container,
      local.container,
      props.style.container
    ],
    text: [
      button.text,
      disabled && buttonDisabled.text,
      local.text,
      props.style.text
    ]
  }
}

class Button extends React.Component {
  render () {
    const { onPress, disabled, text } = this.props
    const styles = getStyles(this.props)
    const content = (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )

    if (disabled) {
      return content
    }

    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  accent: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired
}

Button.defaultProps = {
  primary: false,
  accent: false,
  secondary: false,
  disabled: false,
  onPress: null,
  style: {}
}
export default withTheme(Button)
