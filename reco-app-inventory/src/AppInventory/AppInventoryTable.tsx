import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Text } from "../Components/Text";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 250 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "appId", headerName: "Connector", width: 150 },
];

export function AppInventoryTable({ rows }: { rows: any }) {

    function getRowId(row: any) {
        return row.appName;
      }
  if(rows.length == 0){
    return <Text>There are no apps to display</Text>
  }
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} getRowId={getRowId}/>
    </div>
  );
}
