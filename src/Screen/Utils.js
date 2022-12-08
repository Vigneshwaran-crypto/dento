import React from 'react';
import {Alert, Platform, ToastAndroid} from 'react-native';

export const Toast = value => {
  if (Platform.OS == 'android') {
    ToastAndroid.show(value, ToastAndroid.SHORT);
  } else {
    Alert.alert('Alert', value);
  }
};
