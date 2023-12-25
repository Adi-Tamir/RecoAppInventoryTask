import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Text } from "../Components/Text";
import { FunctionExpression } from "typescript";
import { Function } from "@stitches/react/types/util";

const columns: GridColDef[] = [
  { field: "appName", headerName: "Name", width: 250 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "appId", headerName: "Connector", width: 150 },
];

export function AppInventoryTable({
  rows,
  rowsPerPage,
  totalRows,
  setRow,
}: {
  rows: any;
  rowsPerPage: number;
  totalRows: number;
  setRow: Function;
}) {
  function getRowId(row: any) {
    return row.appName;
  }
  if (rows?.length == 0) {
    return <Text>There are no apps to display</Text>;
  }
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        pageSizeOptions={[25, 50]}
        paginationMode="server"
        rowCount={totalRows}
        onRowClick={setRow}
      />
    </div>
  );
}
