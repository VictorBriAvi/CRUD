import React from "react";
import Create from "./Components/Create";
import Show from "./Components/Show";

function App() {
  return (
    <div className="container text-center">
      <h2>CRUD Context API - Reducer</h2>
      <Create />
      <Show />
    </div>
  );
}

export default App;
