import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { gamesData } from "../../utils/mockData";

import { useContext, useMemo } from "react";
import gamePicksContext from "../../context/gamePicksContext";

const HomePageMainGrid = () => {
  const { picks, setGamePicks } = useContext(gamePicksContext);

  const cellWidth = "69px";
  const columnDef = [
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

              setGamePicks(picks);
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
              selection.betsOn = "draw";
              selection.homeTeam = row.row.original.homeTeam;
              selection.awayTeam = row.row.original.awayTeam;
              selection.odds = row.row.original.odds.threeWay.draw;
              picks[`${selection.matchId}`] = selection;

              setGamePicks(picks);
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
              selection.betsOn = "Away";
              selection.homeTeam = row.row.original.homeTeam;
              selection.awayTeam = row.row.original.awayTeam;
              selection.odds = row.row.original.odds.threeWay.away;
              picks[`${selection.matchId}`] = selection;

              setGamePicks(picks);
              console.log("picks", picks);
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
            onClick={() => {
              const selection = {};
              selection.matchId = row.row.original.matchId;
              selection.oddsType = "doubleChance";
              selection.betsOn = "Home";
              selection.homeTeam = row.row.original.homeTeam;
              selection.awayTeam = row.row.original.awayTeam;
              selection.odds = row.row.original.odds.doubleChance.home;
              picks[`${selection.matchId}`] = selection;

              setGamePicks(picks);
              console.log("picks", picks);
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
            onClick={() => {
              const selection = {};
              selection.matchId = row.row.original.matchId;
              selection.oddsType = "doubleChance";
              selection.betsOn = "Draw";
              selection.homeTeam = row.row.original.homeTeam;
              selection.awayTeam = row.row.original.awayTeam;
              selection.odds = row.row.original.odds.doubleChance.draw;
              picks[`${selection.matchId}`] = selection;

              setGamePicks(picks);
              console.log("picks", picks);
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
            onClick={() => {
              const selection = {};
              selection.matchId = row.row.original.matchId;
              selection.oddsType = "doubleChance";
              selection.betsOn = "Away";
              selection.homeTeam = row.row.original.homeTeam;
              selection.awayTeam = row.row.original.awayTeam;
              selection.odds = row.row.original.odds.doubleChance.away;
              picks[`${selection.matchId}`] = selection;

              setGamePicks(picks);
              console.log("picks", picks);
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
            onClick={() => {
              const selection = {};
              selection.matchId = row.row.original.matchId;
              selection.oddsType = "over_under";
              selection.betsOn = "Over";
              selection.homeTeam = row.row.original.homeTeam;
              selection.awayTeam = row.row.original.awayTeam;
              selection.odds = row.row.original.odds.over_under.over;
              picks[`${selection.matchId}`] = selection;

              setGamePicks(picks);
              console.log("picks", picks);
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
            onClick={() => {
              const selection = {};
              selection.matchId = row.row.original.matchId;
              selection.oddsType = "over_under";
              selection.betsOn = "Under";
              selection.homeTeam = row.row.original.homeTeam;
              selection.awayTeam = row.row.original.awayTeam;
              selection.odds = row.row.original.odds.over_under.under;
              picks[`${selection.matchId}`] = selection;

              setGamePicks(picks);
              console.log("picks", picks);
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
            onClick={() => {
              const selection = {};
              selection.matchId = row.row.original.matchId;
              selection.oddsType = "bothToScore";
              selection.betsOn = "Yes";
              selection.homeTeam = row.row.original.homeTeam;
              selection.awayTeam = row.row.original.awayTeam;
              selection.odds = row.row.original.odds.bothToScore.yes;
              picks[`${selection.matchId}`] = selection;

              setGamePicks(picks);
              console.log("picks", picks);
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
            onClick={() => {
              const selection = {};
              selection.matchId = row.row.original.matchId;
              selection.oddsType = "bothToScore";
              selection.betsOn = "No";
              selection.homeTeam = row.row.original.homeTeam;
              selection.awayTeam = row.row.original.awayTeam;
              selection.odds = row.row.original.odds.bothToScore.no;
              picks[`${selection.matchId}`] = selection;

              setGamePicks(picks);
              console.log("picks", picks);
            }}
          >
            {row.row.original.odds.bothToScore.no}
          </button>
        );
      },
    },
  ];

  const finalData = useMemo(() => gamesData, []);
  const finalColumnDef = useMemo(() => columnDef, []);

  const table = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div
      style={{
        backgroundColor: "#1E1E1E",
        borderRadius: "5px",
        height: "30%",
        width: "100%",
        overflow: "auto",
        marginTop: "1%",
        marginLeft: "0.2%",
      }}
    >
      <table>
        <thead>
          {table.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {flexRender(
                        columnEl.column.columnDef.header,
                        columnEl.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomePageMainGrid;
