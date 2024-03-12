import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { gamesData } from "../../utils/mockData";
import { columnDef } from "./columns";

import { useMemo } from "react";

const HomePageMainGrid = () => {
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
