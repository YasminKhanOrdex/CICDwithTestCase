// import React, {Component, useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Pressable,
//   Alert,
//   TouchableOpacity,
// } from 'react-native';
// import User from './ueser';

// const Form = () => {
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const onSubmit = (username, password) => {
//     console.log('called');
//     return username, password;
//   };
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//         alignContent: 'center',
//       }}>
//       <TextInput
//         testID="username"
//         // onChangeText={text => this.change(text)}
//         onChangeText={e => setUserName(e)}
//         style={{
//           backgroundColor: 'grey',
//           marginBottom: 15,
//           paddingLeft: 20,
//           borderRadius: 5,
//         }}
//         placeholder="Enter Username"
//       />
//       <TextInput
//         testID="password"
//         onChangeText={e => setPassword(e)}
//         style={{
//           backgroundColor: 'grey',
//           marginBottom: 15,
//           paddingLeft: 20,
//           borderRadius: 5,
//         }}
//         placeholder="Enter password"
//       />
//       <TouchableOpacity
//         testID="submit-button"
//         style={{
//           backgroundColor: 'pink',
//           height: 50,
//           width: 100,
//           justifyContent: 'center',
//           alignItems: 'center',
//           alignSelf: 'center',
//           borderRadius: 5,
//         }}
//         onPress={onSubmit}>
//         <Text style={{color: '#000', fontSize: 18}}>onSubmit</Text>
//       </TouchableOpacity>
//       <Text>{username}</Text>
//     </View>
//   );
// };
// export default Form;


import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Form = ({onSubmit}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = text => {
    setFirstName(text);
  };

  const handleLastNameChange = text => {
    setLastName(text);
  };

  const handleSubmit = () => {
    if (firstName && lastName) {
      onSubmit({firstName, lastName});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={handleFirstNameChange}
        value={firstName}
        testID="input1"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={handleLastNameChange}
        value={lastName}
        testID="input2"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        testID="submit-button">
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Form;