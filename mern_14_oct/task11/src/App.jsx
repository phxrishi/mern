import { useEffect } from "react";

function App() {
  useEffect(() => {
    const now = new Date();
    console.log("Component mounted at:", now.toString());
  }, []); // runs only once on mount

  return (
    <div>
      <h1>Check the console</h1>
    </div>
  );
}

export default App;
