import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          seconds: ((new Date().getTime()) - new Date(this.props.sunset).getTime()) / 1000
        }
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      )
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID)
    }
  
    tick() {
      this.setState({
        seconds: this.state.seconds - 1
      })
    }
  
    render() {
      return (
        <View>
            <Text>
                Sunset in {this.state.seconds > 3600 
                    ? `${ (this.state.seconds / 3600).toFixed(1)} hours`
                    :  this.state.seconds > (30 * 60)
                    ? `${this.state.seconds / 60} minutes`
                    : `Less than 30 minutes!`}
            </Text>
        </View>
      )
    }
  }