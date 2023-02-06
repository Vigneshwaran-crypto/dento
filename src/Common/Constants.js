export const StaticValues = {
  LoginApi: 'LoginApi',
  GetAllCategories: 'GetAllCategories',
  GetAllProducts: 'GetAllProducts',
  GetSingleCart: 'GetSingleCart',
  IncreaseCount: 'IncreaseCount',
  DecreaseCount: 'DecreaseCount',
  ClearCount: 'ClearCount',
  DummyType: 'DummyType',

  //API Constants
  GetApiData: 'GetApiData',
  ApiDataReceived: 'ApiDataReceived',
  ApiDataError: 'ApiDataError',
  CustomSpinner: 'CustomSpinner',
};

export const GET_API_DATA = 'GET_API_DATA';

export const RESET_REDUX_STORE = 'RESET_REDUX_STORE';

const AuthToken = 'Bearer ';

export const HTTP = {
  LOG_IN: 'https://fakestoreapi.com/auth/login',
  GET_ALL_PRODUCTS: 'https://fakestoreapi.com/products',
  GET_ALL_CATEGORIES: 'https://fakestoreapi.com/products/categories',
  GET_SINGLE_CART: 'https://fakestoreapi.com/carts/user/2',

  // Header For Api Call Without Authorization.
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  // Header For Api Call With Authorization.
  AuthHeader: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    Authorization: AuthToken,
  },

  /** For Multipart Form data add fileUpload = true in action.js
   * Before hitting form data please update the Http.Authorization it will not contain token*/
  // Form Data Header with Authorization
  FormDataHeader: {
    'Content-Type': 'multipart/form-data',
    Accept: '*/*',
    Authorization: AuthToken,
  },
};
