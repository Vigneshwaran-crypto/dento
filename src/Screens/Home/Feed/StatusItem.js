import {style} from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const StatusItem = props => {
  const item = props.item;

  // useEffect(() => {
  //   LOG('val', item);
  // }, []);

  return (
    <View style={styles.parent}>
      <View style={styles.image}>
        <Image
          style={styles.userImage}
          source={require('../../../../Assets/accountstock.png')}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.stockName}>{item.stockMarket}</Text>
        <Text style={styles.money}>{item.currency}</Text>
      </View>
      <View>
        <Image
          style={styles.stockImage}
          source={require('../../../../Assets/line-blue.png')}
        />
      </View>
      <View style={styles.moneyContent}>
        <Text style={styles.stock}>{item.stock}</Text>
        <Text styles={styles.per}>{item.percent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
    shadowColor: 'black',
  },
  content: {
    flexDirection: 'column',
    margin: 5,
    padding: 2,
    marginHorizontal: 10,
    marginStart: 10,
    marginRight: 30,
  },
  moneyContent: {
    flexDirection: 'column',
    margin: 5,
    marginStart: 25,
  },
  userImage: {
    height: 50,
    width: 50,
  },
  stockName: {
    fontWeight: '700',
    marginBottom: 5,
    color: 'black',
  },
  money: {
    fontWeight: '500',
    color: 'grey',
  },
  stock: {
    fontWeight: '600',
    marginBottom: 5,
    color: 'black',
  },
  per: {
    fontWeight: '800',
    color: 'black',
  },
  stockImage: {
    height: 30,
    width: 30,
  },
});

export default StatusItem;
