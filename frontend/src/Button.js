import React, { useState, useEffect } from 'react';


function Button() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('this is run only on the first render');
  }, []);
  useEffect(() => {
    console.log(`count is: ${count}`);
  }, [count])
  const handleButtonClick = () => {
    console.log('the button was clicked');
    setCount(count + 1);
  }
  return (
    <button onClick={() => handleButtonClick()}>{count > 0 ? `I have been clicked ${count} times` : `I haven't been clicked yet! Click me!!`}</button>
    )
  }


export default Button;
