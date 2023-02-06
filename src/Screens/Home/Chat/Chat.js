import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData, LOG, Toast} from '../../../Common/Utils';
import List from '../../../../Assets/MOCK_DATA.json';

import ChatItem from './ChatItem';

const Chat = props => {
  const RenderItem = ({item, index}) => <ChatItem item={item} index={index} />;

  // const RenderItem = ({item, index}) => {
  //   <ChatItem item={item} index={index} />;
  // };

  return (
    <View>
      <FlatList listKey="2" data={List} renderItem={RenderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#EEEEEE',
  },
});
export default Chat;
