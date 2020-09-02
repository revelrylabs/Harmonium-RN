/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native'

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
