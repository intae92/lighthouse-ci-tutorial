import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const upCount = () => setCount(prevCount => (prevCount += 1));
  const downCount = () => setCount(prevCount => (prevCount -= 1));

  return (
    <div>
      <p>{count}</p>
      <button onClick={upCount}>up</button>
      <button onClick={downCount}>down</button>
    </div>
  );
};

export default App;
