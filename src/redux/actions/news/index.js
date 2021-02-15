import React from 'react';
import {Platform} from 'react-native';
import {
  NEWS_CLEARDATA,
  NEWS_FAILURE,
  NEWS_FETCHING,
  NEWS_SUCCESS,
} from '../../types';
import {checkNetwork} from '../../../utils';
import {url} from '../../../api';
import axios from 'axios';

export const news = (request_data) => {
  return (dispatch) => {
    checkNetwork().then((state) => {
      if (state.isConnected == true) {
        dispatch({type: NEWS_FETCHING});

        axios
          .post(
            'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=81acabfcbbfb4e30aa491c8b1060c31b',
          )
          .then(function (response) {
            console.log('API RESPONSE *******', JSON.stringify(response.data));
            // news_request_success(dispatch, response.data.articles);
            if ((response.data.status = 'ok')) {
              // update_user_token(dispatch, response.data.token)
              news_request_success(dispatch, response.data.articles);
            } else {
              // alert(response.data.msg)
              news_request_failure(dispatch, response.data.msg);
            }
          })
          .catch(function (error) {
            console.log('API RESPONSE ERROR *******', JSON.stringify(error));
            news_request_failure(
              dispatch,
              'We apologize, a technical error has occurred.',
            );
          });
      } else {
        news_request_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const news_request_success = (dispatch, data) => {
  dispatch({type: NEWS_SUCCESS, payload: data});
};

const news_request_failure = (dispatch, error) => {
  dispatch({type: NEWS_FAILURE, payload: error});
};

export const news_clear_data = () => {
  return (dispatch) => {
    dispatch({
      type: NEWS_CLEARDATA,
      payload: '',
    });
  };
};
