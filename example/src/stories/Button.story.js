import React from 'react'
import {View} from 'react-native'
import {Button} from 'harmonium-rn'
import {storiesOf} from '@storybook/react-native'

storiesOf('Button', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('Default Button', () => (
    <Button title='Click me' onPress={() => console.warn('Clicked!')} />
  ))
  .add('Secondary Button', () => (
    <Button
      variant='secondary'
      title='Click me'
      onPress={() => console.warn('Clicked!')}
    />
  ))
  .add('Disabled Button', () => (
    <Button
      disabled
      title='Click me'
      onPress={() => console.warn('Clicked!')}
    />
  ))
