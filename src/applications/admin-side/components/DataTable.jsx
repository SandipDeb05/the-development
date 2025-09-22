export default function DataTable({ rows = [], columns = [] }) {
  const tableColumns = columns.map((col) => {
    return {
      field: col.field,
      headerName: col.headerName,
      renderCell: col.renderCell || function () {},
    };
  });

  const tableRowsCols = rows.map((row) => {
    return tableColumns.map((col) => {
      return {
        columnValue: col.renderCell(row) || row[col.field],
      };
    });
  });

  return (
    <table className="w-full text-sm text-left border">
      <thead className="text-xs uppercase border-b">
        <tr>
          {tableColumns?.map((col, index) => {
            return (
              <th
                key={`column-header-${index}`}
                scope="col"
                className="px-4 py-3 border-r"
              >
                {col.headerName}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {tableRowsCols?.map((cols, index) => {
          return (
            <tr key={`table-row-${index}`}>
              {cols?.map((col, index) => {
                return (
                  <td
                    key={`row-column-${index}`}
                    className="px-4 py-3 border-b border-r"
                  >
                    {col?.columnValue}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
