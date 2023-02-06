import {StaticValues} from '../Common/Constants';
import {LOG} from '../Common/Utils';
import Login from '../Screens/Auth/Login';

const initialState = {
  count: 0,
  login: true,
  categoryList: [],
  productList: [],
  singleCart: [],
  customSpinner: false,
};

export const AuthReducer = (state = initialState, action) => {
  LOG('======= Inside AUTH Reducer =======');
  LOG('Action : ', action);
  switch (action.type) {
    case StaticValues.ApiDataError:
      return Object.assign({}, state, {
        customSpinner: false,
      });

    case StaticValues.CustomSpinner:
      return Object.assign({}, state, {
        customSpinner: action.value,
      });

    case StaticValues.LoginApi:
      LOG('Inside Reducer Login');
      return state;

    case StaticValues.GetAllCategories:
      LOG('Inside Reducer Get All Categories :');
      return Object.assign({}, state, {
        categoryList: action.jsonData,
      });

    case StaticValues.GetAllProducts:
      LOG('Inside Reducer Get All Products');
      return Object.assign({}, state, {
        productList: action.jsonData,
      });
    case StaticValues.GetSingleCart:
      LOG('Inside Reducer Get All singleCart :');
      return Object.assign({}, state, {
        singleCart: action.jsonData,
      });

    case StaticValues.IncreaseCount:
      LOG('Increase Value', state.count);

      return Object.assign({}, state, {
        count: state.count + 1,
      });

    case StaticValues.DecreaseCount:
      return Object.assign({}, state, {
        count: state.count - 1,
      });

    case StaticValues.ClearCount:
      return Object.assign({}, state, {
        count: 0,
      });

    default:
      LOG('DEFAULT AUTH REDUCER');
      return state;
  }
};
