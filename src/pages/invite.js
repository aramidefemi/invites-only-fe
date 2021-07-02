import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Result, Button } from 'antd';

const InvoicePage = () => {
  const location = useLocation();

  const { main } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_INVITE',
      payload: location.pathname,
    });
  }, []);

  return (
    <body>
      <Result
        icon={<img src={main?.url} />}
        title={`Hello ${main?.fullname}`}
        subTitle={
          main.hasPlusOne
            ? `This barcode only admits 2 persons and should be presented at the entrance of the venue to gain access to the event. AARIZ @1
        11-7-21 
        12 NOON
        CARITAS EVENT CENTRE EBUTE IBESHE ROAD IKORODU`
            : `This barcode only admits 1 person and should be presented at the entrance of the venue to gain access to the event.`
        }
      />
    </body>
  );
};

export default InvoicePage;
