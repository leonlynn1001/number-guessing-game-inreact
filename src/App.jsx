import { useState } from "react";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [userNumber, setUserNunmber] = useState(" ");

  return (
    <div className="App">
      <Main setUserNunmber={setUserNunmber} userNumber={userNumber} />
    </div>
  );
}

export default App;
