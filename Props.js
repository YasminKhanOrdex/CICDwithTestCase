import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Props extends Component {
  constructor() {
    super();
    this.state = {
      data: 'test',
    };
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Profile data="Jest Testing!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: 'red',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default Props;
