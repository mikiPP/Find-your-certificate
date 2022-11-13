import { Ext } from '../../constants/ext';
import { GET_CERTIFICATES, SET_CERTIFICATES } from '../../constants';

// @ts-ignore
Ext.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === GET_CERTIFICATES) {
    //TODO: GET CERTIFICATES FUNCTION
    sendResponse({});
    return true;
  }

  if (msg.type === SET_CERTIFICATES) {
    //TODO: SET CERTIFICATES FUNCTION
    sendResponse({});
    return true;
  }

  sendResponse({});
  return true;
});
