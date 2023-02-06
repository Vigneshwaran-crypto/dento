import {StaticValues} from '../Common/Constants';
import {GET_API_DATA, HTTP} from '../Common/Constants';

export const LoginApi = Data => {
  return dispatch => {
    dispatch({
      type: StaticValues.GetApiData,
      noAuth: true,
      jsonData: Data,
      requestUrl: HTTP.LOG_IN,
      requestType: StaticValues.LoginApi,
    });
  };
};

export const GetAllCategories = () => {
  return dispatch => {
    dispatch({
      type: StaticValues.GetApiData,
      get: true,
      noAuth: true,
      requestUrl: HTTP.GET_ALL_CATEGORIES,
      requestType: StaticValues.GetAllCategories,
    });
  };
};

export const GetAllProducts = () => {
  return dispatch => {
    dispatch({
      type: StaticValues.GetApiData,
      get: true,
      noAuth: true,
      requestUrl: HTTP.GET_ALL_PRODUCTS,
      requestType: StaticValues.GetAllProducts,
    });
  };
};

export const GetSingleCart = () => {
  return dispatch => {
    dispatch({
      type: StaticValues.GetApiData,
      get: true,
      noAuth: true,
      requestUrl: HTTP.GET_SINGLE_CART,
      requestType: StaticValues.GetSingleCart,
    });
  };
};

export const getAllMentors = jsondata => {
  LOG('---getAllMentors----');
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      jsonData: jsondata,
      requestUrl: HTTP.GET_MENTORS_ALL_URL,
      requestType: GET_MENTORS_ALL,
      stopSpinner: true,
    });
  };
};

export const IncreaseCount = () => {
  return dispatch => {
    dispatch({
      type: StaticValues.IncreaseCount,
    });
  };
};

export const DecreaseCount = () => {
  return dispatch => {
    dispatch({
      type: StaticValues.DecreaseCount,
    });
  };
};

export const ClearCount = () => {
  return dispatch => {
    dispatch({
      type: StaticValues.ClearCount,
    });
  };
};

export const initSpinner = () => {
  return dispatch => {
    dispatch({
      type: StaticValues.CustomSpinner,
      value: true,
    });
  };
};

export const stopSpinner = () => {
  return dispatch => {
    dispatch({
      type: StaticValues.CustomSpinner,
      value: false,
    });
  };
};
