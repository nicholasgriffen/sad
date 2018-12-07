import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Joke from './components/Joke'

import BackgroundImage from './components/background'

export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </BackgroundImage>
    )
  }
}
