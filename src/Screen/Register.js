import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {useState} from 'react';
import {Toast} from './Utils';

const Register = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const upClicked = props => {
    //Toast('Registered');
    console.log(username);

    if (contact.length < 10) {
      Toast('Invalid Number');
    }
    Actions.pop();
  };

  return (
    <SafeAreaView style={styles.whole}>
      <View style={styles.parent}>
        <View>
          <Text style={styles.signupText}>Sign up</Text>
        </View>

        <View style={styles.inputFields}>
          <TextInput
            placeholder="Username"
            style={styles.username}
            onChangeText={setUsername}></TextInput>
          <TextInput
            placeholder="Email"
            style={styles.email}
            onChangeText={setEmail}></TextInput>
          <TextInput
            placeholder="Password"
            style={styles.password}
            onChangeText={setPassword}
            secureTextEntry={true}></TextInput>
          <TextInput
            placeholder="Contact Number"
            style={styles.contact}
            onChangeText={setContact}
            keyboardType={'number-pad'}
            maxLength={10}></TextInput>
        </View>
        <TouchableOpacity onPress={upClicked}>
          <Text style={styles.signBt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    justifyContent: 'center',
  },
  parent: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
  },
  signupText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  inputFields: {
    marginTop: 30,
  },
  username: {
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 30,
    margin: 15,
  },
  email: {
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 30,
    margin: 15,
  },
  password: {
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 30,
    margin: 15,
  },
  contact: {
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 30,
    margin: 15,
    TextInput: 'number-pad',
  },
  signBt: {
    padding: 10,
    marginHorizontal: 120,
    marginTop: 20,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 30,
  },
});

export default Register;
