import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Result, Spin } from 'antd';

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
      {main.url ? (
        <Result
          icon={<img src={main?.url} />}
          title={`Hello ${main?.fullname}`}
          subTitle={
            main.hasPlusOne
              ? `This barcode only admits 2 persons and should be presented at the entrance of the venue to gain access to the event.`
              : `This barcode only admits 1 person and should be presented at the entrance of the venue to gain access to the event.`
          }
          extra={
            <div>
              <h2>&bull; Aariz's 1st Birthday Party &bull;</h2>
              <h3>
                &bull; Venue: Carritas Events centre Ebute Ibeshe Road Ikorodu
                &bull;
              </h3>
              <h2>&bull; 12:00 noon &bull;</h2>
              <h2>&bull; 11 July 2021 12noon &bull;</h2>
            </div>
          }
        />
      ) : (
        <Spin size="large" />
      )}
    </body>
  );
};

export default InvoicePage;
