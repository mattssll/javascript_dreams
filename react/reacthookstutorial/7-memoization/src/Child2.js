import React from 'react';

const Child2 = React.memo(({reset}) => {
  console.log('Child2');

  return (
    <button onClick={reset}>Reset</button>
  );
});

export default Child2;

