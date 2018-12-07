import React from 'react'
import { Alert, Text } from 'react-native'

export default class SunriseSunset extends React.Component {

    render() {
        return (
            <Text>SUNRISE:{this.props.sunrise}SUNSET:{this.props.sunset}</Text>
        )
    }
}

//lat=36.7201600&lng=-4.4203400