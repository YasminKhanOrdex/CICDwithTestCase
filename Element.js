import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default class Element extends Component {
  constructor() {
    super();
    this.state = {
      data: 'test',
    };
  }
  componentDidMount() {}
  change(x) {
    this.setState({data: x});
  }

  //   Statechange() {
  //     this.setState({data: 10});
  //   }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInput
          testID="username"
          onChangeText={text => this.change(text)}
          style={{backgroundColor: 'grey', marginBottom: 15}}
          placeholder="Enter Username"
        />
        <TextInput
          testID="password"
          onChangeText={text => this.change(text)}
          style={{backgroundColor: 'grey', marginBottom: 15}}
          placeholder="Enter password"
        />
      </View>
    );
  }
}
