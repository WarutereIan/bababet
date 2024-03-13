import { useContext } from "react";
import gamePicksContext from "../../context/gamePicksContext";

const Betslip = () => {
  const { picks, setGamePicks } = useContext(gamePicksContext);

  const _arrValues = Object.values(picks);

  console.log(_arrValues.length);

  return <></>;
};

export default Betslip;
