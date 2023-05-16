import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
} from 'react-native';
import User from './ueser';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: 'abc',
      username: 'cc',
    };
  }
  componentDidMount() {
    User.all().then(data => {
      console.warn('Chck ApI Data >>>>>>', data);
    });
  }
  change(x) {
    this.setState({data: x});
  }

  submit() {
    console.log(this.state.username);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 20,
          alignContent: 'center',
        }}>
        <TextInput
          testID="username"
          // onChangeText={text => this.change(text)}
          onChangeText={username => {
            this.setState({username: username});
          }}
          style={{
            backgroundColor: 'grey',
            marginBottom: 15,
            paddingLeft: 20,
            borderRadius: 5,
          }}
          placeholder="Enter Username"
        />
        <TextInput
          testID="password"
          // onChangeText={text => this.change(text)}
          style={{
            backgroundColor: 'grey',
            marginBottom: 15,
            paddingLeft: 20,
            borderRadius: 5,
          }}
          placeholder="Enter password"
        />
        <Pressable
          style={{
            backgroundColor: 'pink',
            height: 50,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 5,
          }}
          onPress={this.submit}>
          <Text style={{color: '#000', fontSize: 18}}>Submit</Text>
        </Pressable>
        <Text>{this.state.username}</Text>
      </View>
    );
  }
}
