import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions, SafeAreaView} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import {getData, LOG} from '../../Common/Utils';
import {colors} from './../../Common/colors';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  useEffect(() => {
    getData('auth').then(val => {
      LOG('state', val);

      setTimeout(() => {
        if (val == true) {
          Actions.shopLogIn();
        } else {
          Actions.login();
        }
      }, 1000);
    });
  }, []);

  return (
    <SafeAreaView style={styles.base}>
      <View>
        <View>
          <Image
            style={styles.coverImage}
            source={require('../../../Assets/mangadget.png')}
          />
          <ActivityIndicator
            style={style.loader}
            size="large"
            color="colors.baseBackground"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.baseBackground,
    height: height,
    width: width,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  coverImage: {
    heigh: height * 0.5,
    width: width * 0.9,
    alignSelf: 'center',
  },
});

export default SplashScreen;

// {loader ? (
//     <ActivityIndicator size="large" color="grey" />
//   ) : (
//     <FlatList
//       data={list}
//       renderItem={() => {
//         return (
//           <View>
//             <Text style={styles.text}>Hello</Text>
//           </View>
//         );
//       }}
//     />
//   )}
