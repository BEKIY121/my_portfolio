import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className='title'>Counter: {count}</h1>
      <button className='but' onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter;
