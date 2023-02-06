import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {getData, LOG, Toast} from '../../../Common/Utils';
import {FlatList} from 'react-native-gesture-handler';

import axios from 'axios';
import {ActivityIndicator} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

const Feed = props => {
  const [loader, setLoader] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    var myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');

    var raw = JSON.stringify({});
    var config = {
      method: 'GET',
      headers: myHeader,
      url: 'https://fakestoreapi.com/products',
    };

    axios(config)
      .then(response => {
        if (response.data) {
          setList(response.data);
        }
        setLoader(false);
      })
      .catch(e => {
        Toast('something went wrong!');
        setLoader(false);
      });
  }, []);

  return (
    <View>
      <View>
        <View>
          <TouchableOpacity onPress={dataClick}>
            <Text>Data</Text>
          </TouchableOpacity>
        </View>

        {loader ? (
          <ActivityIndicator size="large" color="grey" />
        ) : (
          <FlatList
            data={list}
            renderItem={() => {
              return (
                <View>
                  <Text style={styles.text}>Hello</Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};
const dataClick = () => {
  Actions.CountScreen();
};

const styles = StyleSheet.create({
  text: {
    elevation: 5,
    shadowColor: 'black',
    padding: 5,
    margin: 10,
    fontSize: 20,
  },
});
export default Feed;
