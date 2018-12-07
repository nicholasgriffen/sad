import React from 'react'
import { Alert, Text } from 'react-native'



export default class Joke extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            joke: "",
        }
    }

    componentDidMount() {
        this.someThing()
    }

    someThing = async () => {
        console.log('hello. im here!')
        const response = await fetch('https://icanhazdadjoke.com/',
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            })
        console.log('response', response)

        if (response.status === 200) {
            let resJSON = await response.json()
            console.log('resJSON', resJSON.joke)
            this.setState({
                // ...this.state,
                joke: resJSON.joke
            })
            Alert.alert(resJSON.joke)
        } else {
            console.log('Error:', response)
            throw new Error('GET request failed')
        }
    }

    render() {
        return (
            <Text>{this.state.joke}</Text>
        )
    }
}
