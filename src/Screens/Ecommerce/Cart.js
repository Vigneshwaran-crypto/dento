import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LOG} from '../../Common/Utils';
import {GetSingleCart} from '../../Redux/AuthAction';
import CartListItem from './CartListItem';

const Cart = props => {
  const Dispatch = useDispatch();
  const cartList = useSelector(({auth}) => auth.singleCart);

  useEffect(() => {
    Dispatch(GetSingleCart());
    LOG('CArt cart cart');
  }, []);

  const RenderItem = ({item, index}) => (
    <CartListItem item={item} index={index} />
  );

  return (
    <View>
      <FlatList data={cartList} renderItem={RenderItem} />
    </View>
  );
};

export default Cart;
