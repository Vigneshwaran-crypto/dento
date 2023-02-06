import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {LOG} from '../../../Common/Utils';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const ChatItem = props => {
  const item = props.item;

  return (
    <View style={styles.listView}>
      <View style={styles.parent}>
        <View>
          <Image
            style={styles.profileImage}
            source={require('../../../../Assets/man.png')}
          />
        </View>
        <View style={styles.contents}>
          <Text style={styles.rating}>
            <Entypo name="star" size={17} /> {item.rating.toString()}
          </Text>
          <Text style={styles.name}>{item.first_name}</Text>
          <Text style={styles.role}>{item.role}</Text>
        </View>

        <View style={styles.chevronParent}>
          <Image
            style={styles.chevron}
            source={require('../../../../Assets/right-chevron.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    borderWidth: 0.3,
    fontSize: 20,
    marginHorizontal: 20,
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  parent: {
    padding: 10,
    flexDirection: 'row',
    marginStart: 10,
    alignItems: 'center',
  },
  contents: {
    flexDirection: 'column',
    margin: 4,
    marginLeft: 20,
    marginTop: 5,
    flex: 1,
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  rating: {
    fontWeight: '700',
    color: '#FD841F',
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 1,
    marginTop: 2,
    marginBottom: 2,
  },
  role: {
    fontWeight: '600',
  },
  chevronParent: {
    backgroundColor: '#E6E6E6',
    marginEnd: 30,
    borderRadius: 5,
    height: 60,
  },
  chevron: {
    width: 40,
    height: 40,
    marginVertical: 10,
  },
});
export default ChatItem;
