import React, { Component } from 'react'
import { Alert, Image, ImageBackground, Text, StyleSheet, View } from 'react-native'

import Unsplash from 'unsplash-js/native'

import { APP_ACCESS_KEY, APP_ACCESS_KEY_2 } from 'react-native-dotenv'

class BackgroundImage extends Component {

  state = {
    img: {},
    imgIsLoaded: false
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${APP_ACCESS_KEY_2}`, {
        query: "winter",
        orientation: "portrait",
        count: "1",
        featured: true
      })
      const json = await response.json()

      this.setState({ img: json, imgIsLoaded: true })
    } catch(err) {
      console.log("ERROR >>>", err)
    }
  }

  render() {
    const { img, imgIsLoaded } = this.state
    return ( 
      !imgIsLoaded ? 
        <View style={styles.backgroundColor}>
          {this.props.children}
        </View>
      : 
        <ImageBackground source={{ uri: img.urls.full }} style={styles.backgroundImg}>
          {this.props.children}
        </ImageBackground>
    ) 
  } 
}

const styles = StyleSheet.create({
  backgroundImg: {
    width: '100%',
    height: '100%'
  },
  backgroundColor: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey'
  }
})

export default BackgroundImage