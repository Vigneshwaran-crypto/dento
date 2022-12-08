import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';

const Login = props => {
  return (
    <View style={styles.parent}>
      <Text style={styles.login}>Login</Text>

      <View style={styles.inputField}>
        <TextInput style={styles.email} placeholder={'Email'}></TextInput>
        <TextInput style={styles.password} placeholder={'Password'}></TextInput>
      </View>

      <View style={styles.loginBt}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>Or</Text>

      <View style={styles.regBt}>
        <TouchableOpacity onPress={regClick}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const regClick = props => {
  Actions.register();
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },

  login: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    textDecorationLine: 'underline',
    justifyContent: 'center',
  },
  loginBt: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 150,
    textSize: 20,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
  },
  email: {
    paddingHorizontal: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    marginTop: 30,
    fontSize: 15,
    backgroundColor: 'white',
    textDecorationColor: 'black',
    color: 'black',
  },
  password: {
    paddingHorizontal: 15,
    borderWidth: 1,
    margin: 5,
    marginTop: 15,
    borderRadius: 10,
    fontSize: 15,
    color: 'black',
    marginBottom: 25,
  },
  new: {
    color: 'black',
  },
  inputField: {
    marginHorizontal: 30,
  },
  regBt: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 150,
    margin: 5,
    borderRadius: 5,
  },
  or: {
    margin: 6,
    textAlign: 'center',
  },
});
export default Login;
