import AsyncStorage from '@react-native-async-storage/async-storage';
import {value} from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import React from 'react';
import {Alert, Platform, ToastAndroid} from 'react-native';

export const Toast = value => {
  if (Platform.OS == 'android') {
    ToastAndroid.show(value, ToastAndroid.SHORT);
  } else {
    Alert.alert('Alert', value);
  }
};
export const LOG = (message, value) => {
  if (value) {
    console.log(message, value);
  } else {
    console.log(message);
  }
};

export const storeData = async (key, value) => {
  try {
    const val = JSON.stringify(value);
    console.log('storing value', value);
    await AsyncStorage.setItem(key, val);
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored

      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    // error reading value
    return null;
  }
};

export const removeValue = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
