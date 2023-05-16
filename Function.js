import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Function extends Component {
  constructor() {
    super();
    this.state = {
      data: 'test',
    };
  }
  componentDidMount() {}
  change(x) {
    this.setState({data: x * 10});
  }

//   Statechange() {
//     this.setState({data: 10});
//   }
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>This is a React Native snapshot test .</Text>
      </View>
    );
  }
}
