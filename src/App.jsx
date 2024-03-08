import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./navigation/HomePage";
import ResponsiveAppBar from "./components/appbar/AppBar";

import "./App.css";
import { AppSideBar } from "./components/sidebar/AppSideBar";

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
