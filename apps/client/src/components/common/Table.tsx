import React from "react";
import {useTable} from "react-table";

interface ITable {
  columns: any;
  data: any;
  onRowClick?: (e:any) => void;
}

export const Table: React.FC<ITable> = (props) => {
  const {columns, data, onRowClick} = props;

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({
      columns,
      data,
    });

  const [selectedRow, setSelectedRow] = React.useState<number>();

  return (
    <div className="card overflow-hidden">
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="table-header bg-primaryColor px-3 py-3"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <>
                <tr
                  {...row.getRowProps()}
                  className="cursor-pointer transition-all duration-500 hover:(bg-hoverSecondaryColor) bg-secondaryColor"
                  onClick={() => {
                    setSelectedRow(row.index);
                    onRowClick(row);
                  }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};