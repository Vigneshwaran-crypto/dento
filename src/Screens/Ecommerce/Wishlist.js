import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../Common/colors';
import {textFontFaceLight, textFontFaceSemiBold} from '../../Common/Styles';

const {height, width} = Dimensions.get('window');

const Wishlist = () => {
  const backArrow = () => {
    Actions.pop();
  };

  return (
    <View style={styles.parent}>
      <View style={styles.topNavBar}>
        <TouchableOpacity style={styles.backArrow} onPress={backArrow}>
          <Feather name="arrow-left" size={30} style={styles.backArrow} />
        </TouchableOpacity>
        <View style={styles.Fav}>
          <Text style={styles.favorites}>Favorites</Text>
        </View>
      </View>
      <View style={styles.imageParent}>
        <Image
          style={styles.plant}
          source={require('../../../Assets/plant.png')}
        />
        <Image
          style={styles.girl}
          source={require('../../../Assets/girl.png')}
        />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.noFavYet}>No favorites yet</Text>
        <Text style={styles.hitOrder}>Hit the orange button down</Text>
        <Text style={styles.hitOrder}>below to create an order</Text>

        <TouchableOpacity style={styles.startBt}>
          <Text style={styles.startTxt}>Start ordering</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
  },
  topNavBar: {
    flexDirection: 'row',
    margin: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    color: colors.black,
  },
  Fav: {
    flexDirection: 'row',
  },
  favorites: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    marginStart: width * 0.3,
    fontSize: 20,
  },
  imageParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  plant: {
    marginTop: 130,
  },
  textContent: {
    alignItems: 'center',
  },
  noFavYet: {
    fontFamily: textFontFaceSemiBold,
    fontSize: 20,
    color: colors.black29,
    margin: 10,
  },
  hitOrder: {
    color: colors.black,
    fontFamily: textFontFaceLight,
  },
  startBt: {
    backgroundColor: colors.lightBlue,
    margin: 10,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  startTxt: {
    color: colors.white,
    fontFamily: textFontFaceSemiBold,
  },
});

export default Wishlist;
