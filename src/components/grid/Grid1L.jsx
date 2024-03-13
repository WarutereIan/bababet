import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { gamesData } from "../../utils/mockData";

import "./table.css";
import { useContext, useMemo } from "react";
import  gamePicksContext  from "../../context/gamePicksContext";

const Grid1L = () => {
  const cellWidth = "69px";
  const { picks, setGamePicks } = useContext(gamePicksContext);

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

              console.log(picks);
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
              selection.betsOn = "away";
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
        marginTop: "5%",
        borderRadius: "5px",
        paddingLeft: "2%",
        paddingRight: "2%",
        overflow: "auto",
        width: "100%",
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

export default Grid1L;
