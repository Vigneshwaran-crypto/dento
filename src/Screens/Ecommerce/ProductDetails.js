import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {LOG} from '../../Common/Utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../Common/colors';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {Actions} from 'react-native-router-flux';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'react-native';
import {textFontFaceLight, textFontFaceSemiBold} from '../../Common/Styles';
import {GetSingleCart} from '../../Redux/AuthAction';

const {height, width} = Dimensions.get('window');

const ProductDetails = props => {
  const productItem = props;
  const [showModal, setShowModal] = useState(false);
  const Dispatch = useDispatch();

  useEffect(() => {}, []);

  const addBasket = () => {
    Actions.pop();
  };
  const openModal = () => {
    LOG('open Clicked');
    setShowModal(true);
  };
  const closeModal = () => {
    LOG('close Clicked');
    setShowModal(false);
  };

  const backArrow = () => {
    Actions.pop();
  };
  const Like = () => {};

  return (
    <View style={styles.parent}>
      <View style={styles.topNavigation}>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={backArrow}>
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.heart}>
          <TouchableOpacity onPress={Like}>
            {/* <AntDesign name="hearto" size={25} /> */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageParent}>
        <View style={styles.imageBackground}>
          <Image style={styles.image} source={{uri: productItem.image}} />
        </View>
      </View>
      <View style={styles.bottomView}>
        <View>
          <Text style={styles.itemName}>{productItem.title}</Text>
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.colors}>Colors</Text>
          <View style={styles.colorsButtonPack}>
            <TouchableOpacity style={styles.skyBlue}>
              <View style={styles.dotSkyBlue} />
              <Text style={styles.skyBlueText}>Sky Blue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roseGold}>
              <View style={styles.dotRoseGold} />
              <Text style={styles.roseGoldText}>Rose Gold</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.green}>
              <View style={styles.dotGreen} />
              <Text style={styles.greenText}>Green</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.category}>{productItem.category} :</Text>
          <Text numberOfLines={3} style={styles.description}>
            {productItem.description}
          </Text>
          <TouchableOpacity style={styles.fullDesBt} onPress={openModal}>
            <Text style={styles.fullDescription}>Full description</Text>
            <Feather
              style={styles.fullDescription}
              name="arrow-right"
              size={20}
            />
          </TouchableOpacity>
          <View style={styles.priceView}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.price}> ${productItem.price}</Text>
          </View>

          <TouchableOpacity style={styles.addBt} onPress={addBasket}>
            <Text style={styles.addText}>Add to basket</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} visible={showModal} style={styles.Model}>
        <TouchableOpacity style={styles.transparentLayer} onPress={closeModal}>
          <Text style={styles.tranDesText}> {productItem.category} </Text>
          <Text style={styles.transText}>{productItem.description}</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.blueishGrey,
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  arrow: {marginEnd: 200, marginBottom: 5},
  heart: {marginStart: 130},

  image: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  imageParent: {
    flex: 1,
    backgroundColor: colors.blueishGrey,
  },
  imageBackground: {
    width: width * 0.8,
    height: height * 0.4,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: colors.blueishGrey,
  },
  bottomView: {
    flexDirection: 'column',
    width: width * 0.99,
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  itemName: {
    color: colors.black,
    fontSize: 18,
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 3,
    fontFamily: textFontFaceSemiBold,
  },
  bottomContent: {
    marginHorizontal: 20,
  },
  colors: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 17,
    marginTop: 3,
    marginBottom: 5,
  },
  colorsButtonPack: {
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'center',
    marginBottom: 10,
  },
  skyBlue: {
    borderColor: colors.black,
    height: 30,
    width: 80,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  roseGold: {
    borderColor: colors.black,
    height: 30,
    width: 80,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  green: {
    borderColor: colors.black,
    height: 30,
    width: 80,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  skyBlueText: {
    fontFamily: textFontFaceSemiBold,
    fontSize: 12,
    marginEnd: 10,
    marginStart: 5,
  },
  roseGoldText: {
    fontFamily: textFontFaceSemiBold,
    fontSize: 10,
    marginEnd: 5,
    marginStart: 5,
  },
  greenText: {
    fontFamily: textFontFaceSemiBold,
    fontSize: 12,
    marginEnd: 20,
    marginStart: 5,
  },
  dotSkyBlue: {
    padding: 6,
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    marginStart: 15,
  },
  dotRoseGold: {
    padding: 6,
    backgroundColor: colors.baseSecondary,
    borderRadius: 20,
    marginStart: 10,
  },
  dotGreen: {
    padding: 6,
    backgroundColor: colors.green,
    borderRadius: 10,
    marginStart: 10,
  },
  category: {
    fontFamily: textFontFaceSemiBold,
    marginVertical: 5,
    fontSize: 15,
  },
  description: {
    fontFamily: textFontFaceLight,
    color: colors.black,
  },
  fullDesBt: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  fullDescription: {
    color: colors.baseBackground,
  },
  priceView: {
    flexDirection: 'row',
    marginTop: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  totalText: {
    fontFamily: textFontFaceSemiBold,
    fontSize: 20,
    marginEnd: 90,
  },
  price: {
    fontFamily: textFontFaceSemiBold,
    fontSize: 18,
    color: colors.baseBackground,
    marginStart: 90,
  },
  addBt: {
    height: 40,
    width: width * 0.5,
    alignSelf: 'center',
    backgroundColor: colors.baseBackground,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 15,
  },
  addText: {
    alignSelf: 'center',
    fontFamily: textFontFaceSemiBold,
    color: colors.white,
  },
  transparentLayer: {
    flex: 1,
    backgroundColor: colors.blueishGrey,
    marginHorizontal: 10,
    borderRadius: 10,
    color: colors.white,
    justifyContent: 'center',
  },
  transText: {
    color: colors.black,
    fontSize: 15,
    marginHorizontal: 30,
    marginBottom: 50,
    fontFamily: textFontFaceLight,
  },
  tranDesText: {
    fontFamily: textFontFaceSemiBold,
    alignSelf: 'center',
    marginBottom: 20,

    color: colors.black,
  },
});
export default ProductDetails;
