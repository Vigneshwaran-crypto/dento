import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {colors} from '../../Common/colors';
import {
  textFontFaceLight,
  textFontFaceMedium,
  textFontFaceSemiBold,
} from '../../Common/Styles';
import {Actions} from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');

const Account = () => {
  backArrow = () => {
    Actions.pop();
  };
  return (
    <View style={styles.parent}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={backArrow}>
          <Feather name="arrow-left" size={25} style={styles.backArrow} />
        </TouchableOpacity>
        <View style={styles.myProfileParent}>
          <Text style={styles.myProfileText}>My profile</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <Image
          style={styles.profileImage}
          source={require('../../../Assets/Rectangle.png')}
        />
        <Text style={styles.personName}>Rosina Doe</Text>
        <View style={styles.addressParent}>
          <EvilIcons name="location" size={23} style={styles.locationLogo} />
          <Text style={styles.address}>
            Address: 43 Oxford Road {'\n'}M13 4GR
            {'\n'}
            Manchester, UK
          </Text>
        </View>
      </View>
      <View style={styles.editProfile}>
        <Text style={styles.editProfileText}>Edit profile</Text>
        <Feather name="chevron-right" size={25} style={styles.chevron} />
      </View>
      <View style={styles.shoppingAddress}>
        <Text style={styles.shoppingAddressText}>Shopping address</Text>
        <Feather name="chevron-right" size={25} style={styles.chevronSA} />
      </View>
      <View style={styles.orderHistory}>
        <Text style={styles.orderHistoryText}>Order history</Text>
        <Feather name="chevron-right" size={25} style={styles.chevronOH} />
      </View>
      <View style={styles.cards}>
        <Text style={styles.cardsText}>Cards</Text>
        <Feather name="chevron-right" size={25} style={styles.chevronC} />
      </View>
      <View style={styles.notifications}>
        <Text style={styles.notificationsText}>Notifications</Text>
        <Feather name="chevron-right" size={25} style={styles.chevronN} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.blueishGrey,
  },
  topBar: {
    flexDirection: 'row',
  },
  backArrow: {
    color: colors.black,
    marginVertical: 20,
    marginStart: 10,
  },
  myProfileParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myProfileText: {
    color: colors.black,
    fontSize: 20,
    fontFamily: textFontFaceSemiBold,
    marginEnd: 20,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: 50,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowOpacity: 10,
    shadowColor: colors.black,
    shadowRadius: 10,
  },
  profileImage: {
    height: height * 0.1,
    width: width * 0.2,
    marginTop: -50,
  },
  addressParent: {
    flexDirection: 'row',
  },
  personName: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    margin: 5,
  },
  locationLogo: {
    color: colors.black,
    marginTop: 8,
  },
  address: {
    color: colors.black,
    fontFamily: textFontFaceLight,
    margin: 5,
  },
  editProfile: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 30,
    marginVertical: 15,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
  },
  editProfileText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 17,
    margin: 5,
  },
  chevron: {
    color: colors.black,
    alignSelf: 'center',
    marginStart: 165,
  },
  shoppingAddress: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
  },
  shoppingAddressText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 17,
    margin: 5,
  },
  chevronSA: {
    color: colors.black,
    alignSelf: 'center',
    marginStart: 115,
  },
  orderHistory: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
  },
  orderHistoryText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 17,
    margin: 5,
  },
  chevronOH: {
    color: colors.black,
    alignSelf: 'center',
    marginStart: 155,
  },
  cards: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
  },
  cardsText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 17,
    margin: 5,
  },
  chevronC: {
    color: colors.black,
    alignSelf: 'center',
    marginStart: 220,
  },
  notifications: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
  },
  notificationsText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 17,
    margin: 5,
  },
  chevronN: {
    color: colors.black,
    alignSelf: 'center',
    marginStart: 160,
  },
});
export default Account;
