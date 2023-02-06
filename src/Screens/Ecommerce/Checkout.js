import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../Common/colors';
import {
  textFontFaceLight,
  textFontFaceMedium,
  textFontFaceSemiBold,
} from '../../Common/Styles';
import {RadioButton} from 'react-native-paper';
import {LOG} from '../../Common/Utils';

const Checkout = () => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const backArrow = () => {
    Actions.pop();
  };

  const confirmBt = () => {
    LOG('confirm clicked');
    setShow(true);
  };
  const closeModal = () => {
    LOG('close clicked');
    setShow(false);
  };

  return (
    <View style={styles.parent}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={backArrow}>
          <Feather
            name="arrow-left"
            size={25}
            style={styles.backArrow}
            color={colors.black}
          />
        </TouchableOpacity>
        <View style={styles.checkoutParent}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </View>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.shippingText}>Shipping Information</Text>
        <Text style={styles.changeText}>change</Text>
      </View>
      <View style={styles.address}>
        <View style={styles.nameContent}>
          <Feather name="user" size={18} color={'black'} />
          <Text style={styles.nameText}>Rosina Doe</Text>
        </View>
        <View style={styles.addressContent}>
          <Ionicons
            name="location-outline"
            size={20}
            color={'black'}
            style={styles.locationLogo}
          />
          <Text style={styles.addressText}>
            43 Oxford Road M13 4GR {'\n'}Manchester, UK
          </Text>
        </View>
        <View style={styles.contactContent}>
          <Ionicons name="call-outline" size={20} color={'black'} />
          <Text style={styles.contactText}>+234 9011039271</Text>
        </View>
      </View>

      <Text style={styles.paymentMethodText}>Payment Method</Text>

      <View style={styles.paymentMethodContent}>
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <View style={styles.visa}>
            <RadioButton value="visa" />
            <Image
              style={styles.imageVisa}
              source={require('../../../Assets/visa.png')}
            />
            <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          </View>
          <View style={styles.masterCard}>
            <RadioButton value="masterCard" />
            <Image
              style={styles.imageMasterCard}
              source={require('../../../Assets/mastercard.png')}
            />
            <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          </View>
          <View style={styles.bank}>
            <RadioButton value="bank" />
            <View style={styles.imageBank}>
              <Text style={styles.bankText}>Bank</Text>
            </View>
            <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.priceContent}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.bottomPrice}> $ 954</Text>
        </View>

        <TouchableOpacity style={styles.confirmBt} onPress={confirmBt}>
          <Text style={styles.confirmTxt}>Confirm and pay</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} style={styles.modal} visible={show}>
        <View style={styles.ModalViewTop}></View>
        <View style={styles.ModalViewBottom}>
          <TouchableOpacity style={styles.modalParent} onPress={closeModal}>
            <View style={styles.topText}>
              <Text style={styles.confirmTxtModal}>Confirm and pay</Text>
              <Text style={styles.productTxtModal}>product : 2</Text>
            </View>

            <View style={styles.cardDetails}>
              <View style={styles.cardTopView}>
                <Text style={styles.myCardText}>My credit card</Text>
                <Image
                  style={styles.visaImageModal}
                  source={require('../../../Assets/visa.png')}
                />
              </View>

              <View style={styles.cardMiddleView}>
                <Text style={styles.myCardstarText}>**** **** ****</Text>
                <Text style={styles.myCardnumberText}>1234</Text>
              </View>
              <View style={styles.cardBottomView}>
                <Text style={styles.CardNameText}>Rosina Doe</Text>
                <Text style={styles.cardDateText}>04/26</Text>
              </View>
            </View>
            <View style={styles.priceContentModal}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.bottomPrice}> $ 954</Text>
            </View>
            <TouchableOpacity onPress={closeModal} style={styles.modalBt}>
              <Text style={styles.confirmTxt}>Pay now</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.blueishGrey,
  },
  topBar: {
    flexDirection: 'row',
    margin: 20,
  },
  checkoutParent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkoutText: {
    alignSelf: 'center',
    marginEnd: 25,
    fontFamily: textFontFaceSemiBold,
    fontSize: 18,
    color: colors.black,
  },
  textContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  shippingText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    marginEnd: 70,
  },
  changeText: {
    color: colors.lightBlue,
  },
  address: {
    backgroundColor: colors.white,
    marginHorizontal: 40,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  nameContent: {
    flexDirection: 'row',
  },
  nameText: {
    color: colors.black,
    marginStart: 6,
    marginBottom: 10,
    fontFamily: textFontFaceMedium,
  },
  addressContent: {
    flexDirection: 'row',
    marginTop: 6,
  },
  locationLogo: {
    marginStart: -2,
  },
  addressText: {
    color: colors.black,
    marginStart: 5,
    fontFamily: textFontFaceMedium,
  },
  contactContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contactText: {
    color: colors.black,
    marginStart: 5,
    fontFamily: textFontFaceMedium,
  },
  paymentMethodText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    marginStart: 65,
    marginTop: 20,
  },
  paymentMethodContent: {
    backgroundColor: colors.white,
    marginHorizontal: 40,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  cardNumber: {
    color: colors.black,
    marginStart: 15,
    marginTop: 15,
    fontFamily: textFontFaceMedium,
  },
  visa: {
    flexDirection: 'row',
    margin: 10,
  },
  imageVisa: {
    margin: 10,
  },
  masterCard: {
    flexDirection: 'row',
    margin: 10,
  },
  imageMasterCard: {
    margin: 10,
  },
  bank: {
    flexDirection: 'row',
    margin: 10,
  },
  imageBank: {
    backgroundColor: colors.darkblue,
    margin: 10,
    height: 30,
    width: 50,
    borderRadius: 5,
  },
  bankText: {
    color: colors.white,
    fontFamily: textFontFaceSemiBold,
  },
  priceContent: {
    flexDirection: 'row',
  },
  bottomBar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  total: {
    fontFamily: textFontFaceSemiBold,
    color: colors.black,
    marginEnd: 200,
    fontSize: 20,
  },
  bottomPrice: {
    color: colors.lightBlue,
    fontFamily: textFontFaceSemiBold,
    fontSize: 15,
  },
  confirmBt: {
    backgroundColor: colors.blue33,
    padding: 12,
    borderRadius: 8,
    paddingHorizontal: 35,

    marginTop: 30,
  },
  confirmTxt: {
    fontFamily: textFontFaceSemiBold,
    color: colors.white,
  },
  modal: {
    flex: 2,
    backgroundColor: colors.white,
  },
  ModalViewTop: {
    flex: 1,
    backgroundColor: colors.transparentGrey,
  },
  ModalViewBottom: {
    flex: 1,
    backgroundColor: colors.transparentGrey,
  },
  modalBt: {
    backgroundColor: colors.blue33,
    padding: 12,
    borderRadius: 8,
    paddingHorizontal: 35,
    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 120,
  },
  modalParent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  topText: {
    flexDirection: 'row',
  },
  confirmTxtModal: {
    color: colors.black,
    marginStart: 25,
    marginTop: 10,
    fontSize: 16,
    fontFamily: textFontFaceMedium,
  },
  productTxtModal: {
    color: colors.black,
    marginStart: 140,
    marginTop: 10,
    fontSize: 16,
    fontFamily: textFontFaceLight,
  },
  cardDetails: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueishGrey,
    marginTop: 30,
    padding: 10,
    marginHorizontal: 50,
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: colors.lightBlue,
  },

  cardTopView: {
    flexDirection: 'row',
  },
  myCardText: {
    color: colors.black,
    marginEnd: 30,
    fontFamily: textFontFaceSemiBold,
  },
  cardMiddleView: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  myCardstarText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    marginEnd: 30,
  },
  myCardnumberText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
  },
  cardBottomView: {
    flexDirection: 'row',
  },
  CardNameText: {
    fontFamily: textFontFaceSemiBold,
    marginEnd: 60,
  },
  cardDateText: {},
  priceContentModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Checkout;
