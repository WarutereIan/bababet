const cellWidth = "69px";

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
        >
          {row.row.original.odds.threeWay.away}
        </button>
      );
    },
  },
  {
    accessorKey: "odds.doubleChance.home",
    header: "1 OR X",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",

            borderRadius: "5px",
            width: cellWidth,

            textAlign: "center",
          }}
        >
          {row.row.original.odds.doubleChance.home}
        </button>
      );
    },
  },
  {
    accessorKey: "odds.doubleChance.draw",
    header: "X OR 2",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",

            borderRadius: "5px",
            width: cellWidth,

            textAlign: "center",
          }}
        >
          {row.row.original.odds.doubleChance.draw}
        </button>
      );
    },
  },
  {
    accessorKey: "odds.doubleChance.away",
    header: "1 OR 2",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",

            borderRadius: "5px",
            width: cellWidth,

            textAlign: "center",
          }}
        >
          {row.row.original.odds.doubleChance.away}
        </button>
      );
    },
  },
  {
    accessorKey: "odds.over_under.over",
    header: "OVER",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",

            borderRadius: "5px",
            width: cellWidth,

            textAlign: "center",
          }}
        >
          {row.row.original.odds.over_under.over}
        </button>
      );
    },
  },
  {
    accessorKey: "odds.over_under.under",
    header: "UNDER",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",

            borderRadius: "5px",
            width: cellWidth,

            textAlign: "center",
          }}
        >
          {row.row.original.odds.over_under.under}
        </button>
      );
    },
  },
  {
    accessorKey: "odds.bothToScore.yes",
    header: "YES",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",

            borderRadius: "5px",
            width: cellWidth,

            textAlign: "center",
          }}
        >
          {row.row.original.odds.bothToScore.yes}
        </button>
      );
    },
  },
  {
    accessorKey: "odds.bothToScore.no",
    header: "NO",
    cell: (row) => {
      return (
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.19)",

            borderRadius: "5px",
            width: cellWidth,

            textAlign: "center",
          }}
        >
          {row.row.original.odds.bothToScore.no}
        </button>
      );
    },
  },
];
