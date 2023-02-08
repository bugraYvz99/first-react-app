import React, { useState } from 'react';

function TestComponent(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
        <p>{props.children}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        {props.buttonName? props.buttonName : "Click Me"}
      </button>
    </div>
  );
}

export default TestComponent;