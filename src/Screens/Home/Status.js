import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData, LOG, Toast} from '../../Common/Utils';
import stockData from '../../../Assets/STOCK_DATA.json';
import StatusItem from './Feed/StatusItem';

const Status = props => {
  const StockRender = ({item, index}) => (
    <StatusItem item={item} index={index} />
  );

  const [stockDataFinal, setStockData] = useState(stockData);

  useEffect(() => {
    const sortedStock = stockDataFinal.sort((currentItem, nextItem) => {
      if (
        currentItem.stockMarket.trim().toLowerCase() >
        nextItem.stockMarket.trim().toLowerCase()
      ) {
        return 1;
      } else if (
        currentItem.stockMarket.trim().toLowerCase() ==
        nextItem.stockMarket.trim().toLowerCase()
      ) {
        return 0;
      }
      return -1;
    });
    // }, []);
    LOG('sorted list', sortedStock);
    setStockData(sortedStock);
  }, []);

  return (
    <View>
      <FlatList listKey="2" data={stockDataFinal} renderItem={StockRender} />
    </View>
  );
};

export default Status;
