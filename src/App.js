import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* This is the main heading */}
      <h1 className="justify-center text-center mt-3 mb-3">FIFA player cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
