import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {StyleSheet, Image} from 'react-native';
import {colors} from '../../Common/colors';
import {LOG, Toast} from '../../Common/Utils';
import {textFontFaceLight, textFontFaceSemiBold} from '../../Common/Styles';

import {Actions} from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');

const ShopItem = props => {
  const productListItem = props.item;

  // LOG('productList', productListItem);

  const productTouch = () => {
    // Actions.productDetails({productListItem: productListItem});

    Actions.productDetails(productListItem, {productListItem});
  };

  return (
    <View style={styles.parent}>
      <View style={styles.product}>
        <TouchableOpacity onPress={productTouch} style={styles.touch}>
          <View style={styles.imageParent}>
            <Image style={styles.image} source={{uri: productListItem.image}} />
          </View>
          <Text style={styles.title} numberOfLines={3}>
            {' '}
            {productListItem.title}
          </Text>
          <Text style={styles.price}>Price : {productListItem.price} $</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    borderColor: colors.accent,
    backgroundColor: colors.blueishGrey,
    alignItems: 'center',
  },
  product: {
    height: height * 0.2,
    width: width * 0.4,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    marginVertical: 37,
    paddingHorizontal: 10,
  },
  touch: {
    alignItems: 'center',
  },
  title: {
    fontSize: 10,
    color: colors.black29,
    marginTop: 60,
    fontFamily: textFontFaceSemiBold,
  },
  price: {
    color: colors.baseBackground,
    marginTop: 10,
    fontFamily: textFontFaceSemiBold,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  imageParent: {
    position: 'absolute',
    zIndex: 2,
    marginTop: -50,
  },
});

export default ShopItem;
