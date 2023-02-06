import React, {useReducer} from 'react';
import {View, Text, initSpinner} from 'react-native';
import {State, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {LOG} from '../Common/Utils';

const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const CLEAR_COUNT = 'CLEAR_COUNT';

const CountScreen = props => {
  // const [state, dispatch] = useReducer(countReducer, {count: 0});

  const Dispatch = useDispatch();

  const count = useSelector(({auth}) => auth.count);
  const categoryList = useSelector(({auth}) => auth.categoryList);
  const customSpinner = useSelector(({auth}) => auth.customSpinner);

  const onIncreasePress = () => {
    // var JsonData = {
    //   userName: 'userName',
    //   password: 'password',
    // };
    // Dispatch(LoginApi(JsonData));
    //  Dispatch(initSpinner());
    // Dispatch({type: INCREMENT_COUNT, increase: true});
  };
  const onDecreasePress = () => {
    Dispatch({type: DECREMENT_COUNT, decrease: true});
  };
  const onClearPress = () => {
    Dispatch({type: CLEAR_COUNT, decrease: true});
  };

  //state.count

  return (
    <View>
      <Text>{'count value ' + count}</Text>
      <View>
        <TouchableOpacity onPress={onIncreasePress}>
          <Text>INCREMENT_COUNT</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onDecreasePress}>
          <Text>DECREMENT_COUNT</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onClearPress}>
          <Text>CLEAR_COUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const countReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      action.increase;
      LOG('increase value');
      return {count: state.count + 1};

    case DECREMENT_COUNT:
      action.increase;
      LOG('decrease value');
      return {count: state.count - 1};
    case CLEAR_COUNT:
      action.increase;
      LOG('c value');
      return {count: 0};
  }
};

export default CountScreen;
