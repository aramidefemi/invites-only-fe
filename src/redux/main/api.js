import { post, get, deleteAPI, put } from '../store';
import { message } from 'antd';

const api = (store) => (next) => async (action) => {
  let response; 

  switch (action.type) {
    case 'REQUEST_INVITE':
      response = await post('/create/invite/', action.payload); 
      action.payload = response?.data;
      message.success('Successfully sent. Your barcode to gain access to the event will be sent shortly')
      return next(action);
    case 'GET_INVITE':
      response = await get(action.payload); 
      action.payload = response?.data;
      return next(action);
      
    default:
      return next(action);
  }
};

export default api;
