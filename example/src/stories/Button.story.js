import React from 'react'
import {View} from 'react-native'
import {Button, ThemeContext, getTheme} from 'harmonium-rn'
import {storiesOf} from '@storybook/react-native'

storiesOf('Button', module)
  .addDecorator(story => (
    <ThemeContext.Provider value={getTheme()}>
      <View style={{padding: 30}}>{story()}</View>
    </ThemeContext.Provider>
  ))
  .add('Primary Button', () => (
    <Button
      primary
      text='Primary Button'
      onPress={() => console.warn('Clicked!')}
    />
  ))
  .add('Secondary Button', () => (
    <Button
      secondary
      text='Secondary Button'
      onPress={() => console.warn('Clicked!')}
    />
  ))
  .add('Accent Button', () => (
    <Button
      accent
      text='Accent Button'
      onPress={() => console.warn('Clicked!')}
    />
  ))
  .add('Disabled Button', () => (
    <Button
      disabled
      text='Disabled Button'
      onPress={() => console.warn('Clicked!')}
    />
  ))
