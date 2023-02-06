import React, {useEffect} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {LOG} from '../../Common/Utils';
import CartListChild from './CartListChild';

const CartListItem = props => {
  const cartList = useSelector(({auth}) => auth.singleCart);
  const itemsList = props.item;

  useEffect(() => {
    LOG('cartListItem cartListItem cartListItem');
    LOG('cartListItem', itemsList);
  }, []);

  const RenderItem = ({item, index}) => (
    <CartListChild item={item} index={index} />
  );

  return (
    <View>
      <FlatList data={cartList} renderItem={RenderItem} />
    </View>
  );
};

export default CartListItem;
