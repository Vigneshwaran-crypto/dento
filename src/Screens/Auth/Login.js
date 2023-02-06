import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData, LOG, storeData, Toast} from '../../Common/Utils';
import {colors} from '../../Common/colors';
import {TextInput} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';

import {LoginApi} from '../../Redux/AuthAction';
import {shadow} from 'react-native-paper';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logTrue, setLogTrue] = useState('');
  const Dispatch = useDispatch();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  var swap;

  const regClick = props => {
    LOG('email', email);

    Actions.register();
  };

  const loginBt = props => {
    var jsonData = {
      username: 'mor_2314',
      password: '83r5^_',
    };

    Dispatch(LoginApi(jsonData));

    // var loginArr = [];
    // loginArr.push(loginJson);

    getData('auth').then(val => {
      var initArr = [];
      if (val) {
        initArr = val;
        initArr.forEach(element => {
          if (element.password == password && element.email == email) {
            Toast('Log In successfully');
            swap = true;
            var logState = [];
            var logInTrue = {
              setLogTrue: swap,
            };
            logState.push(logInTrue);
            storeData('logState', true);
            Actions.shopLogIn();
          } else if (email == '' && password == '') {
            Toast('Enter email & password');
          } else if (email == '') {
            Toast('Enter email');
          } else if (password == '') {
            Toast('Enter password');
          }
        });
      }
    });
  };

  return (
    <View style={styles.parent}>
      <View style={styles.topView}>
        <View style={styles.topTextParent}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.backText}>Back</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.login}>Login</Text>

        <View style={styles.inputField}>
          <View style={styles.emailContent}>
            <View style={styles.emailIcon}>
              <Feather name="mail" size={20} styles={styles.mailIcon} />
              <Text style={styles.textEmail}>Email</Text>
            </View>
            <TextInput style={styles.email} onChangeText={setEmail}></TextInput>
          </View>

          <View style={styles.passwordContent}>
            <View style={styles.passwordIcon}>
              <Feather name="lock" size={20} style={styles.PassIcon} />
              <Text style={styles.textPass}>Password</Text>
            </View>
            <TextInput
              style={styles.password}
              onChangeText={setPassword}
              secureTextEntry={isPasswordSecure}
              right={
                <TextInput.Icon
                  icon={isPasswordSecure ? 'eye-off' : 'eye'}
                  onPress={() => {
                    isPasswordSecure
                      ? setIsPasswordSecure(false)
                      : setIsPasswordSecure(true);
                  }}
                />
              }></TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginBt}>
          <TouchableOpacity onPress={loginBt}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.regBt}>
          <TouchableOpacity onPress={regClick}>
            <Text style={styles.buttonCreateAcc}>Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: colors.baseBackground,
    flex: 3,
    flexDirection: 'column',
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
  },
  topTextParent: {
    marginStart: 20,
  },
  welcomeText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 60,
  },
  backText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 60,
  },
  emailContent: {
    flexDirection: 'column',
  },
  login: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginStart: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  emailIcon: {
    flexDirection: 'row',
  },
  passwordIcon: {
    flexDirection: 'row',
  },
  passwordContent: {
    marginTop: 15,
    backgroundColor: colors.white,
  },
  emailContent: {
    marginTop: 10,
  },
  textEmail: {
    marginStart: 5,
  },
  textPass: {
    marginStart: 5,
  },
  forgotPassword: {
    color: colors.lightBlue,
    marginStart: 30,
    marginTop: 8,
  },
  loginBt: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 80,
    textSize: 20,
    marginTop: 40,
    backgroundColor: colors.baseBackground,
    shadowColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  email: {
    paddingHorizontal: 15,
    borderColor: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 15,
    backgroundColor: 'white',
    textDecorationColor: 'black',
    color: 'black',
  },
  password: {
    paddingHorizontal: 15,
    fontSize: 15,
    color: 'black',
    backgroundColor: colors.transparent,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  new: {
    color: 'black',
  },
  inputField: {
    marginHorizontal: 30,
  },

  content: {
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    flexDirection: 'column',
    flex: 2,
  },
  buttonCreateAcc: {
    color: colors.lightBlue,
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 10,
  },
});
export default Login;
