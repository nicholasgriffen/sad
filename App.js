import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Joke from './components/Joke'

import BackgroundImage from './components/background'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      latitude: 0,
      longitude: 0,
      sunrise: 0,
      sunset: 0
    }
    this.API = `https://api.sunrise-sunset.org/json?`

  }
  
  componentDidMount() {
    this.getLocation()
  }

  async fetchTimes(latitude, longitude) {
    const req = await fetch(`${this.API}lat=${latitude}&lng=${longitude}&formatted=0&callback=?`).catch(e => Alert.alert(e.message))
    const text = await req.text()
    const match = text.match(/\?\((.*)\);/)
    const results = JSON.parse(match[1])["results"]
    //
    this.setState({
        sunrise: new Date(`${results["sunrise"]}`.replace(/\+00\:00/)).toLocaleTimeString(),
        sunset: new Date(`${results["sunset"]}`.replace(/\+00\:00/)).toLocaleTimeString()
    })
}

  getLocation() {
    navigator.geolocation.getCurrentPosition((loc) => {
      this.fetchTimes(loc.coords.latitude, loc.coords.longitude)
    }, (e) => { 
      if (e.code === 'E_LOCATION_SERVICES_DISABLED') {
        Alert.alert('Please enable location to use this feature')
      } else {
        Alert.alert(e.code)        
      }
      this.setState({
      ...this.state, 
      errors: e
    })})
  }
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

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',

  },

})
