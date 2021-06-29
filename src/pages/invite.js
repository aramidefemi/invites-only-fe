import React, { useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Result, Button } from 'antd';

const InvoicePage = () => {
  
  const location = useLocation();
  
  const {
    main
  } = useSelector((state) => state);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch({
      type: 'GET_INVITE',
      payload: location.pathname
    });
  }, []);

  return ( 
    <Result
    icon={<img src={main?.url} />}
    title={`Hello ${main?.fullname}, we have your invite ready for you!`}
  />
  );
};

export default InvoicePage;
