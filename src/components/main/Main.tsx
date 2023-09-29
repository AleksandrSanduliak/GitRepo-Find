import { Alert, Box, Typography } from "@mui/material";
import React from "react";
import { useGetReposQuery } from "../../services/api";
import { useAppSelector } from "../../store/store";
import CircularProgress from "@mui/material/CircularProgress";
import QueryResultTable from "./QueryResultTable/QueryResultTable";
import DetailedInfo from "./DetiledInfo/DetailedInfo";
import WelcomeBlock from "./WelcomeBlock/WelcomeBlock";
import { IprocessingIncomingData } from "src/services/types";

const Main: React.FC = (): JSX.Element => {
  const searchInp = useAppSelector((store) => store?.repoSlice?.searchValue);
  const [currentRow, setCurrentRow] = React.useState<
    IprocessingIncomingData | {}
  >({});
  const [currentRowClick, setCurrentRowClick] = React.useState<boolean>(false);
  console.log(searchInp, "main");
  const { data, isSuccess, isError, isFetching, isLoading } = useGetReposQuery(
    searchInp,
    { skip: searchInp ? false : true }
  );
  if (isSuccess) {
    console.log(data);
  }
  if (isLoading || isFetching) {
    console.log("isLoading");
    return (
      <Box
        display="flex"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Box>
    );
  }
  if (isError) {
    <Alert severity="error">Ошибка поиска, повторите запрос еще раз</Alert>;
  }
  return (
    <main className="main">
      <div className="main__container">
        {isSuccess ? (
          <>
            <Box display="flex" height="100vh">
              <QueryResultTable
                dataProps={data}
                setCurrentRow={setCurrentRow}
                setCurrentRowClick={setCurrentRowClick}
              />
              <DetailedInfo
                currentRow={currentRow}
                currentRowClick={currentRowClick}
              />
            </Box>
          </>
        ) : (
          <>
            <WelcomeBlock />
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
