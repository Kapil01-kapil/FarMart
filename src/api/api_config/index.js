import base64 from 'react-native-base64';
const qs = require('qs');
export const BASE_URL =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=';
//export const BASE_URL = "https://ez-fillapi.fundflu.com/api/";
export const Paypal_Base_url = 'https://api.sandbox.paypal.com/';
//kapil project token
export const PROJECT_TOKEN = '81acabfcbbfb4e30aa491c8b1060c31b';

export const url = {
  NEWS:
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=81acabfcbbfb4e30aa491c8b1060c31b',
};
export const paypalurl = {
  tokengenerate: Paypal_Base_url + 'v1/oauth2/token',
  paymentgetpage: Paypal_Base_url + 'v1/payments/payment',
};
export const PAYPAL_CLIENT =
  'AeEoIvl6cY87crWO6mLkzgbVYpd4gDYk_OK_cFJyz49G7E6vtzBNl3UseBKI5Ml-zMQ-052-5iiVc_9n';
export const FreshChat_APP_ID = '49bb23d2-8fa1-47d9-ba92-de499bbe2b28';
export const FreshChat_APP_KEY = 'eaaeaa8f-a676-47f1-93fc-d8e74e6363bd';

('AeEoIvl6cY87crWO6mLkzgbVYpd4gDYk_OK_cFJyz49G7E6vtzBNl3UseBKI5Ml-zMQ-052-5iiVc_9n');
export const PAYPAL_SECRET =
  'EHnrnE19Q8-IVr7DWt_vS0Dy562zINs000pQT3dj3WssGpnCSoDquA4AbBeEVORMZkvDN__IS0kKGMns';
export var basicAuth = base64.encode(`${PAYPAL_CLIENT}:${PAYPAL_SECRET}`);
export const data = {
  grant_type: 'client_credentials',
};
export const options = {
  method: 'post',
  headers: new Headers({
    // Authorization: `Basic ${basicAuth}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Credentials': true,
  }),
  body: qs.stringify(data),
};
export const http_methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELET',
  HEAD: 'HEAD',
  PATCH: 'PATCH',
};
