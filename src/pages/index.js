import React, { useState } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const [ form, setForm ] = useState({});
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
    dispatch({
      type: 'REQUEST_INVITE',
      payload: form,
    });
  };

  return (
    <div id="container">
      <h1>&bull; Keep in Touch &bull;</h1>
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

      <div className="submit">
        <input
          type="submit"
          onClick={handleSubmit}
          value="Send Message"
          id="form_button"
        />
      </div>
    </div>
  );
};

export default HomePage;
