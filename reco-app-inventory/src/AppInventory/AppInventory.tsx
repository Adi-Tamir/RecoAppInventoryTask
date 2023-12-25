import { styled } from "@stitches/react";
import React, { useEffect, useState } from "react";
import { PageHeader } from "../Components/Text";
import { AppInventoryTable } from "./AppInventoryTable";
import { Loading } from "../Components/Loading";
import { AppInventorySlideOver } from "./AppInventorySLideOver";


interface AppData {
  appRows?: any[]; 
  totalCount?: number; 
}

export function AppInventory() {
  const [rows, setRows] = useState(25);

  const [data, setData] = useState<AppData | null>(null);

  const [chosenRow, setChosenRow] = useState(null);

  const body = { pageNumber: 0, pageSize: rows };

  const requestHeaders = new Headers();

  requestHeaders.append("Content-Type", "application/json");

  const params: RequestInit = {
    method: "PUT",
    headers: requestHeaders,
    body: JSON.stringify(body),
  };

  useEffect(() => {
    fetch("/api/v1/app-service/get-apps", params)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <AppInventoryContainer>
      <PageHeader>App Inventory</PageHeader>
      {data ? (
        <AppInventoryTable rows={data.appRows} rowsPerPage={rows} totalRows={150} setRow={setChosenRow} />
      ) : (
        <Loading />
      )}
      {chosenRow && <AppInventorySlideOver app={chosenRow} />}
    </AppInventoryContainer>
  );
}

const AppInventoryContainer = styled("div", { margin: "24px" });
