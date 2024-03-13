const cellWidth = "69px";
const picks = {};

export const columnDef = [
  {
    accessorFn: (row) =>
      `${row.homeTeam.toUpperCase()}                    
      ${row.awayTeam.toUpperCase()}`,
    header: " ",
  },

  {
    accessorKey: "odds.threeWay.home",
    header: "HOME",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",
            width: cellWidth,
            borderRadius: "5px",
          }}
          onClick={() => {
            const selection = {};
            selection.matchId = row.row.original.matchId;
            selection.oddsType = "threeway";
            selection.betsOn = "Home";
            selection.homeTeam = row.row.original.homeTeam;
            selection.awayTeam = row.row.original.awayTeam;
            selection.odds = row.row.original.odds.threeWay.home;
            picks[`${selection.matchId}`] = selection;

            console.log("picks", picks);
          }}
        >
          {row.row.original.odds.threeWay.home}
        </button>
      );
    },
  },
  {
    accessorKey: "odds.threeWay.draw",
    header: "DRAW",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",
            width: cellWidth,
            borderRadius: "5px",
          }}
          onClick={() => {
            const selection = {};

            selection.matchId = row.row.original.matchId;
            selection.oddsType = "threeway";
            selection.betsOn = "Draw";
            selection.homeTeam = row.row.original.homeTeam;
            selection.awayTeam = row.row.original.awayTeam;
            selection.odds = row.row.original.odds.threeWay.draw;

            picks[`${selection.matchId}`] = selection;

            console.log("picks", picks);
          }}
        >
          {row.row.original.odds.threeWay.draw}
        </button>
      );
    },
  },
  {
    accessorKey: "odds.threeWay.away",
    header: "AWAY",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",

            borderRadius: "5px",
            width: cellWidth,

            textAlign: "center",
          }}
          onClick={() => {
            const selection = {};

            selection.matchId = row.row.original.matchId;
            selection.oddsType = "threeway";
            selection.betsOn = "away";
            selection.homeTeam = row.row.original.homeTeam;
            selection.awayTeam = row.row.original.awayTeam;
            selection.odds = row.row.original.odds.threeWay.away;

            picks[`${selection.matchId}`] = selection;

            console.log("picks", picks);
          }}
        >
          {row.row.original.odds.threeWay.away}
        </button>
      );
    },
  },
];
