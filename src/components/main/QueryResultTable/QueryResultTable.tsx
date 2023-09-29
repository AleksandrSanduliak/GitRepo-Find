import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import {
  IQueryResultTable,
  IprocessingIncomingData,
} from "../../../services/types";
const columns: GridColDef<IprocessingIncomingData>[] = [
  {
    field: "name",
    headerName: "Имя",
    minWidth: 120,
    maxWidth: 250,
  },
  { field: "langForRow", headerName: "Язык", maxWidth: 250, minWidth: 120 },
  {
    field: "forksCount",
    headerName: "Число форков",
    maxWidth: 250,
    width: 100,
    minWidth: 120,
  },
  {
    field: "stargazersCount",
    headerName: "Число звезд",
    maxWidth: 250,
    minWidth: 120,
  },
  {
    field: "updatedAt",
    headerName: "Дата обновления",
    maxWidth: 250,
    minWidth: 120,
  },
];
const QueryResultTable = ({
  dataProps,
  setCurrentRow,
  setCurrentRowClick,
}: IQueryResultTable) => {
  const rowOnClick: GridEventListener<"rowClick"> = (
    params,
    e: React.MouseEvent<HTMLElement>
  ) => {
    if (!e.target) return;
    setCurrentRow(params.row);
    setCurrentRowClick(true);
  };
  return (
    <>
      <Box width="100%">
        <Typography sx={{ fontSize: "3rem" }}>Результаты поиска</Typography>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            sx={{ width: "auto" }}
            getRowId={(row: IprocessingIncomingData) =>
              row.updatedAt + row.name + row.forksCount
            }
            rows={dataProps}
            columns={columns}
            onRowClick={rowOnClick}
          />
        </div>
      </Box>
    </>
  );
};

export default QueryResultTable;
