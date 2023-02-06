import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {LOG} from '../../Common/Utils';
import {GetSingleCart} from '../../Redux/AuthAction';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../Common/colors';
import {textFontFaceMedium, textFontFaceSemiBold} from '../../Common/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');
const CartListChild = props => {
  const [product, setProduct] = useState({});
  const currentItems = props.item;
  const ProductList = useSelector(({auth}) => auth.productList);

  useEffect(() => {
    let itemYouWant = null;
    ProductList.forEach(items => {
      if (currentItems.id === items.id) {
        itemYouWant = items;
        LOG('myProducts List', items);
      }
    });

    setProduct(itemYouWant);
  }, []);

  const backArrow = () => {};

  const trashBt = () => {};

  const checkOutBT = () => {
    Actions.Checkout();
  };

  if (product) {
    return (
      <View style={styles.parent}>
        <View style={styles.topNavBar}>
          <TouchableOpacity onPress={backArrow}>
            <Feather name="arrow-left" size={30} style={styles.backArrow} />
          </TouchableOpacity>

          <Text style={styles.basket}>Basket</Text>
          <TouchableOpacity onPress={trashBt}>
            <Feather name="trash" size={23} style={styles.trash} />
          </TouchableOpacity>
        </View>
        <View style={styles.alert}>
          <Feather
            name="bell"
            size={20}
            style={styles.bell}
            color={colors.black}
          />
          <Text style={styles.alertContent}>
            Delivery for FREE until the end of the month
          </Text>
        </View>
        <View style={styles.productContent}>
          <View style={styles.imageParent}>
            <Image source={{uri: product.image}} style={styles.image} />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}> ${product.price}</Text>
            <Text style={styles.quantity}>Quantity</Text>
          </View>
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.priceContent}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.bottomPrice}> ${product.price}</Text>
          </View>
          <TouchableOpacity style={styles.checkOutBT} onPress={checkOutBT}>
            <Text style={styles.checkOutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
  },
  topNavBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  backArrow: {
    color: colors.black,
  },
  basket: {
    marginHorizontal: 120,
    fontSize: 20,
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
  },
  trash: {
    alignItems: 'flex-end',
    color: colors.red,
  },
  alert: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.mildblue,
    padding: 5,
    marginHorizontal: 37,
    borderRadius: 10,
  },
  alertContent: {
    color: colors.black,
    marginStart: 5,
  },

  productContent: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    margin: 20,
    borderRadius: 10,
    paddingVertical: 15,
  },
  imageParent: {
    backgroundColor: colors.white,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  textContent: {
    flexDirection: 'column',
    margin: 5,
    padding: 5,
  },
  title: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
  },
  price: {
    color: colors.lightBlue,
    fontFamily: textFontFaceSemiBold,
    marginVertical: 10,
  },
  quantity: {
    color: colors.black,
    fontFamily: textFontFaceMedium,
  },
  bottomBar: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 350,
  },
  priceContent: {
    flexDirection: 'row',
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
  checkOutBT: {
    backgroundColor: colors.blue33,
    padding: 12,
    borderRadius: 8,
    paddingHorizontal: 35,

    marginTop: 30,
  },
  checkOutText: {
    fontFamily: textFontFaceSemiBold,
    color: colors.white,
  },
});

export default CartListChild;
