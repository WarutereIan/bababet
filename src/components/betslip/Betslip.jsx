import { useContext } from "react";
import gamePicksContext from "../../context/gamePicksContext";

const Betslip = () => {
  const { picks } = useContext(gamePicksContext);

  const _arrValues = Object.values(picks);

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
                  style={{ width: "99.76%", height: "9.47%" }}
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
