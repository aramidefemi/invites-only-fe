import React, { useState } from 'react';

import { Radio, Result } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

const HomePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const {
    main: {},
  } = useSelector((state) => state);

  const handleFormChanges = ({ target: { name, value } }) => {
    const foo = {};
    foo[name] = value;
    const newState = { ...form, ...foo };
    setForm(newState);
  };
  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => setLoading(false), 150000);
    dispatch({
      type: 'REQUEST_INVITE',
      payload: form,
    });
  };

  const options = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];
  if (loading)
    return (
      <Result
        status="success"
        title={`Your barcode to gain access to the event will be sent shortly`}
      />
    );
  return (
    <div id="container">
      <h1>&bull; Aariz's 1st Birthday Party &bull;</h1>
      <h2>
        &bull; Venue: Carritas Events centre Ebute Ibeshe Road Ikorodu &bull;
      </h2>
      <h3>&bull; 12:00 noon &bull;</h3>
      <h4>&bull; 11 July 2021 12noon &bull;</h4>
      <div className="underline"></div>
      <div className="icon_wrapper">
        <svg className="icon" viewBox="0 0 145.192 145.192"></svg>
      </div>
      <div className="name">
        <label for="name"></label>
        <input
          type="text"
          placeholder="My name is"
          name="fullname"
          id="name_input"
          onChange={handleFormChanges}
        />
      </div>

      <div className="telephone">
        <label for="name"></label>
        <input
          type="text"
          placeholder="My number is"
          name="phone"
          id="telephone_input"
          onChange={handleFormChanges}
        />
      </div>
      <div className="telephone">
        <h2>Are you coming with a plus one?</h2>

        <Radio.Group
          options={options}
          onChange={handleFormChanges}
          buttonStyle="solid"
          name="hasPlusOne"
          optionType="button"
          defaultValue={false}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="submit">
        <Button
          type="submit"
          onClick={handleSubmit}
          id="form_button"
          loading={loading}
        >
          {' '}
          Send Message{' '}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
