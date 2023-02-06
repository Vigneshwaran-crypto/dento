/**
 * To Make a networkCall must give keys in action
 * requestUrl, to make network call to the endpoint
 * requestType for redirecting after processing
 * jsonData, for ios must give {} if no data is required
 * type as GET_API_DATA
 *
 * optional keys can be used like,
 * stopSpinner :true , it will dispatch customSpinnerDisable Action
 * get:true, To make a get request => :Currently post and get methods only available
 * multiPart: To make multiPart request
 * noAuth: To use normal header without authentication
 */

import {Actions} from 'react-native-router-flux';
import {HTTP, StaticValues} from '../Common/Constants';
import {LOG, storeData, Toast} from '../Common/Utils';
import {stopSpinner} from './AuthAction';

const axios = require('axios').default;

// Api middleware for Fetching User Details
export const apiMiddleware = store => next => action => {
  LOG('<<<<== Api MIDDLEWARE ==>>>>');

  switch (action.type) {
    // Every Api call in the Application must be done here.
    case StaticValues.GetApiData:
      var header = {};
      if (action.noAuth) {
        header = HTTP.HEADERS;
      } else {
        if (action.multiPart) {
          header = HTTP.FormDataHeader;
        } else {
          header = HTTP.AuthHeader;
        }
      }

      var method = 'post';

      if (action.get) {
        method = 'get';
      }

      var config = {
        method: method,
        url: action.requestUrl.trim(),
        data: action.multiPart
          ? action.jsonData
          : action.get
          ? undefined
          : JSON.stringify(action.jsonData),
        headers: header,
      };
      LOG('request Type ==>' + action.requestType);
      LOG('API DATA Config =====>: ' + JSON.stringify(config));

      // Axios is used in this application to make api calls
      axios(config, {timeout: 2})
        .then(response => {
          LOG('Status Code :' + response);
          LOG('Status Code :' + typeof response.status);

          if (response.status == 401 || response.status == 404) {
            throw response.status;
          } else {
            return Promise.all([response.data, response.status]);
          }
        })
        .then((responseData, status) => {
          LOG('---------------->Response Data<----------------------');
          LOG('request Type ==>' + action.requestType);
          LOG('RESPONSE DATA  >>:' + JSON.stringify(responseData));

          next({
            type: StaticValues.ApiDataReceived,
            responseData: responseData[0],
            status: status,
            requestType: action.requestType,
            requestData: action.jsonData,
            stopSpinner: action.stopSpinner,
            extraData: action.extraData,
          });
        })
        .catch(error => {
          LOG('---------------->Api Data Error<----------------------');
          LOG('ERROR DATA>>:' + JSON.stringify(error));

          store.dispatch({
            type: StaticValues.ApiDataError,
            jsonData: error,
            requestData: action.jsonData,
            requestType: action.requestType,
          });
        });

      break;

    default:
      LOG('Default API MIDDLEWARE');
      next(action);
      break;
  }
  //
};

// Application Middleware is for handling response received from received api data
export const ApplicationMiddleware = store => next => action => {
  LOG('FETCH PROCESS MIDDLEWARE');

  switch (action.type) {
    case StaticValues.ApiDataReceived:
      LOG('API DATA RECEIVED' + JSON.stringify(action));
      //To disable the loading indicator
      var dispatchSpinner = true;
      var dispatchNext = false;
      LOG('Redirection RT == > :' + action.requestType);
      var dispatchSpinner = true; // For stopping dispatch custom
      var dispatchNext = false;
      switch (action.requestType) {
        case StaticValues.LoginApi:
          LOG('hello middleware');
          if (action.responseData.token) {
            LOG('password Correct');
            dispatchNext = true;
            storeData('auth', true);
            Actions.shopLogIn();
          } else {
            Toast('Enter valid credential');
          }
          break;

        // case StaticValues.GetSingleCart:
        //   LOG('Cart Data Loading');
        //   if (action.responseData) {
        //     LOG('Cart Data Response');
        //   } else {
        //     LOG('NO Cart DATA');
        //   }
        //   break;

        default:
          LOG('Redirection : Default ' + action.requestType);
          store.dispatch({
            type: action.requestType,
            jsonData: action.responseData,
            requestData: action.requestData,
            extraData: action.extraData ? action.extraData : {},
          });
          break;
      }
      LOG('Stop Spinner : ' + action.stopSpinner);
      if (action.stopSpinner && dispatchSpinner) {
        store.dispatch(stopSpinner());
      }
      if (dispatchNext) {
        store.dispatch({
          type: action.requestType,
          jsonData: action.responseData,
          requestData: action.requestData,
          extraData: action.extraData ? action.extraData : {},
        });
      }
      break;
    default:
      LOG('Default APPLICATION MIDDLEWARE');
      next(action);
      break;
  }
  //
};
