import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData, LOG, Toast} from '../Common/Utils';

const Home = props => {
  return (
    <SafeAreaView>
      <Text style={styles.heading}> Home Activity</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
  },
});

export default Home;
