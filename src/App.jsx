import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePicksProvider from "./context/GamePicksContext";

import "./App.css";

function App() {
  return (
    <main>
      <div className="App">
        <GamePicksProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </GamePicksProvider>
      </div>
    </main>
  );
}

export default App;
