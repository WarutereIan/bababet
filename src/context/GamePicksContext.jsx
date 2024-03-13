import { useState } from "react";

import gamePicksContext from "./gamePicksContext.js";

const GamePicksProvider = ({ children }) => {
  const [picks, setPicks] = useState({});

  const setGamePicks = (picksObj) => {
    setPicks(picksObj);
  };

  return (
    <>
      <gamePicksContext.Provider value={{ picks, setGamePicks }}>
        <>{children}</>
      </gamePicksContext.Provider>
    </>
  );
};

export default GamePicksProvider;
