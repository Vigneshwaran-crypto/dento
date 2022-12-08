import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Router from './src/Router';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView />
      <Router />
      <SafeAreaView />
    </View>
  );
};

export default App;
