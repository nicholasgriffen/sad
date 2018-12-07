import React, { Component } from 'react'
import { Alert, Image, ImageBackground, Text, StyleSheet, View } from 'react-native'

import { Icon } from 'react-native-elements'

const Sun = ({ sunset }) => {
  return (
    <View style={{
      height: '30%',
      borderRadius: '10',
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    }}>

      <Icon
        type='feather'
        name='sunset'
        size='150'
        padding='5%'
      />
      <Text style={{
        fontWeight: "bold",
        fontSize: "25",
        textAlign: 'center',
        margin: '5%'
      }}>Sunset {sunset}</Text>

    </View>
  )
}

const styles = StyleSheet.create({

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },

})

export default Sun