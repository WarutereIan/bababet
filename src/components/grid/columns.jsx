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
            width: "79px",
            borderRadius: "5px",
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
            width: "79px",
            borderRadius: "5px",
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
            width: "79px",

            textAlign: "center",
          }}
        >
          {row.row.original.odds.threeWay.away}
        </button>
      );
    },
  },
];
