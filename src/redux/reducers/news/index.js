import React from 'react';
import {Platform} from 'react-native';
import {
  NEWS_CLEARDATA,
  NEWS_FAILURE,
  NEWS_FETCHING,
  NEWS_SUCCESS,
} from '../../types';

const initialState = {
  is_success: false,
  is_fetching: false,
  error: false,
  news_data: [],
  msg: '',
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case NEWS_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case NEWS_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        news_data: action.payload,
      };
    case NEWS_FAILURE:
      return {
        ...state,
        is_fetching: false,
        is_success: false,
        error: true,
        msg: action.payload,
      };
    case NEWS_CLEARDATA:
      return {
        ...state,
        is_success: false,
        error: false,
        msg: '',
      };

    default:
      return state;
  }
}
