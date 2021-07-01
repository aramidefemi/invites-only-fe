import React from 'react';
import { useLocation } from "react-router-dom";
import { Result, Button } from 'antd';
const InvoicePage = () => {
  
  const location = useLocation();
  const obj = location.pathname.split('/')
  console.log(' location', obj);
 
const url = `https://aariz-birthday.herokuapp.com/invite/${obj[2]}`;
  return ( 
    <Result
    status="success"
    title={`We've Successfully Approved ${obj[3]}`}
    subTitle={`Invite link: \n "${url}" \n  Phone number: 0${obj[4]} `}
    extra={[ 
      <Button href={`https://wa.me/+234${obj[4]}?text=Here%20is%20your%20special%20invite%20%20${url}`}>Share to Whatsapp</Button>,
    ]}
  />
  );
};

export default InvoicePage;
