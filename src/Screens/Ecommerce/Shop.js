import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {GetAllProducts, initSpinner} from '../../Redux/AuthAction';
import ShopItem from './ShopItem';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../Common/colors';
import {textFontFaceLight, textFontFaceSemiBold} from '../../Common/Styles';

const Shop = prop => {
  const Dispatch = useDispatch();
  const productList = useSelector(({auth}) => auth.productList);

  useEffect(() => {
    Dispatch(GetAllProducts());
  }, []);

  const RenderItem = ({item, index}) => <ShopItem item={item} index={index} />;
  return (
    <View style={styles.List}>
      <FlatList data={productList} renderItem={RenderItem} numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  List: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  searchBar: {
    height: 30,

    flexDirection: 'row',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 40,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 10,
  },
});
export default Shop;
