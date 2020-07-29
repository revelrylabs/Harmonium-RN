import {TouchableHighlight, Text} from 'react-native'
import styles from './styles'

export default function Button({onPress, title, variant = 'primary', icon}) {
  const variantStyles = styles[variant]
  return (
    <View style={styles.container}>
      <TouchableHighlight style={{styles.base, ...variantStyles}}>
        <Text style={styles[`${variant}Text`]}>{title}</Text>
      </TouchableHighlight>
    </View>
  )
}