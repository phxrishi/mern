import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component didUpdate: count changed");
  }, []); // runs after mount + whenever count changes

  return (
    <div>
      <h1>Counter Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
