import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>{this.props.data}</Text>
      </View>
    );
  }
}
