import React from 'react';
import { useLocation } from "react-router-dom";
import { Result, Button } from 'antd';
const InvoicePage = () => {
  
  const location = useLocation();
  console.log(' location', location)
 
const url = 'http://localhost:3000/invite/:id';
  return ( 
    <Result
    status="success"
    title={`We've Successfully Approved name`}
    subTitle={`Invite link: ${url}  phone number: `}
    extra={[ 
      <Button href={`https://wa.me/phone?text=Here%20is%20your%20special%20invite%20%20${url}`}>Share to Whatsapp</Button>,
    ]}
  />
  );
};

export default InvoicePage;
