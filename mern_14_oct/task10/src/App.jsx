import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component didMount: App loaded");
  }, []); // empty dependency array → runs only once on mount

  return (
    <div>
      <h1>Welcome to React</h1>
    </div>
  );
}

export default App;
