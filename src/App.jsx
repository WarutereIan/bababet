import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./navigation/HomePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
