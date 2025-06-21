import React, { useReducer } from 'react';

const initialValue = 0;

const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const initialReact = { like: 0, dislike: 0 };

const reaction = (state, action) => {
  switch (action.type) {
    case 'LIKE':
      return {like: state.like + 1, dislike: state.dislike };
    case 'DISLIKE':
      return {dislike: state.dislike + 1, like: state.like };
    case 'RESET':
      return { like: 0, dislike: 0 };
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(counter, initialValue);
  const [reactionCount, dispatchReaction] = useReducer(reaction, initialReact);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

      <h1>Reactions</h1>
      <h2>Like: {reactionCount.like}</h2>
      <h2>Dislike: {reactionCount.dislike}</h2>
      <button onClick={() => dispatchReaction({ type: 'LIKE' })}>❤️</button>
      <button onClick={() => dispatchReaction({ type: 'DISLIKE' })}>👎</button>
      <button onClick={() => dispatchReaction({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default Reducer;
