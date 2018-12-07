import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Joke from './components/Joke'

export default class App extends React.Component {
  render() {
    return (
      <View>
      <Joke />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
