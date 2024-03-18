import { useContext } from "react";
import gamePicksContext from "../../context/gamePicksContext";

const Betslip = () => {
  const { picks } = useContext(gamePicksContext);

  const _arrValues = Object.values(picks);

  //need a betslip container within which I will pass the pick values as props

  return (
    <>
      {/* <div
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
    </div> */}
      <div>
        {" "}
        {_arrValues.length !== 0
          ? _arrValues.map((pick) => {
              return (
                <div
                  key={pick.matchId}
                  style={{ width: "200px", height: "auto" }}
                >
                  <span>{`${pick.homeTeam} - ${pick.awayTeam}`}</span>
                </div>
              );
            })
          : "No picks provided"}
      </div>
    </>
  );
};

export default Betslip;
