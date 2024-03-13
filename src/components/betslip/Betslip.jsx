import { useContext } from "react";
import gamePicksContext from "../../context/gamePicksContext";

const Betslip = () => {
  const { picks } = useContext(gamePicksContext);

  const _arrValues = Object.values(picks);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {_arrValues.map((pick) => {
        return <div key={pick.matchId}>{pick.matchId}</div>;
      })}
    </div>
  );
};

export default Betslip;
