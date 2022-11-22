import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const greetingShow = useSelector((state) => state.greetings.message);
  const status = useSelector((state) => state.greetings.status);
  const dispatch = useDispatch();
  let content;
  if (status === 'succeeded') {
    content = greetingShow.message;
  }

  return (
    <>
      <h1>Random Greeting:</h1>
      <p>{content}</p>
      <button type="button" onClick={() => dispatch(fetchGreeting())}>
        generate new
      </button>
    </>
  );
};

export default Greeting;
