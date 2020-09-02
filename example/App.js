import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'

import {Button} from 'harmonium-rn'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <Button title='BUTTON' onPress={() => console.warn('CLICK')} />
      </SafeAreaView>
    </>
  )
}

export default App
