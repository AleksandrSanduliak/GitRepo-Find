import { Alert, Box } from "@mui/material";
import React from "react";
import { useGetReposQuery } from "../../services/api";
import { useAppSelector } from "../../store/store";
import QueryResultTable from "./QueryResultTable/QueryResultTable";
import DetailedInfo from "./DetiledInfo/DetailedInfo";
import WelcomeBlock from "./WelcomeBlock/WelcomeBlock";
import { IOptions, IprocessingIncomingData } from "src/services/types";
import Loader from "./Loader";
const Main: React.FC = React.memo((): JSX.Element => {
  const searchInp = useAppSelector((store) => store?.repoSlice?.searchValue);
  const [currentRow, setCurrentRow] = React.useState<
    IprocessingIncomingData | {}
  >({});
  const [currentRowClick, setCurrentRowClick] = React.useState<boolean>(false);
  const [limit, setLimit] = React.useState<number>(25);
  const [options, setOptions] = React.useState<IOptions>({
    name: null,
    after: null,
    first: null,
    before: null,
    last: null,
  });
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [counters, setCounters] = React.useState({
    first: 1,
    last: limit,
  });
  React.useEffect(() => {
    setOptions((prevState: IOptions) => {
      return { ...prevState, name: searchInp, first: limit };
    });
  }, [searchInp, limit]);

  const { data, isSuccess, isError, isFetching, isLoading } = useGetReposQuery(
    options,
    { skip: searchInp ? false : true }
  );

  if (isSuccess) {
    console.log(data);
  }
  if (isLoading || isFetching) {
    // console.log("isLoading");
    return <Loader />;
  }
  if (isError) {
    console.log("isError");
    return (
      <Box height="100vh">
        <Alert severity="error">Ошибка поиска, повторите запрос еще раз</Alert>
      </Box>
    );
  }

  return (
    <main className="main">
      <div>
        {isSuccess ? (
          <>
            <Box display="flex" minHeight="100vh">
              <QueryResultTable
                dataProps={data}
                setCurrentRow={setCurrentRow}
                setCurrentRowClick={setCurrentRowClick}
                limit={limit}
                setLimit={setLimit}
                searchInp={searchInp}
                options={options}
                setOptions={setOptions}
                toggle={toggle}
                setToggle={setToggle}
                counters={counters}
                setCounters={setCounters}
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
});

export default Main;
