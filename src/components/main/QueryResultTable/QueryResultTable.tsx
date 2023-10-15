import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Item } from "../../../services/UI/Item";
import { columns } from "../../../services/data/colums";
import { TypographyElement } from "../../../services/UI/TypographyElem";
import {
  IOptions,
  IQueryResultTable,
  IprocessingIncomingData,
} from "../../../services/types";
import RowsSelect from "./RowsSelect";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const QueryResultTable = ({
  dataProps,
  setCurrentRow,
  setCurrentRowClick,
  limit,
  setLimit,
  searchInp,
  setOptions,
  toggle,
  setToggle,
  counters,
  setCounters,
}: IQueryResultTable) => {
  const rowOnClick = (event: Event) => {
    const target = event.target as HTMLDivElement;
    const currentTarget = event.currentTarget as HTMLDivElement;
    if (!currentTarget.id) {
      target.parentNode!.style.backgroundColor = "white";
      return;
    }
    setCurrentRow(dataProps?.transform[currentTarget.id]);
    setCurrentRowClick(true);
  };

  const handleOrderBy = (event: Event, method: string): void => {
    const target = event.target as HTMLDivElement;
    if (!target.parentNode) return;
    setToggle((prev: boolean) => !prev);
    if (toggle === true) {
      console.log("i am work", toggle);
      setOptions((prevState: IOptions) => {
        return {
          ...prevState,
          name: searchInp + ` sort:${method}-asc`,
          after: null,
          before: null,
          first: limit,
        };
      });
      console.log("i am work", toggle);
      return;
    }
    if (toggle === false) {
      console.log("i am work", toggle);
      setOptions((prevState: IOptions) => {
        return {
          ...prevState,
          name: searchInp + ` sort:${method}-desc`,
          after: null,
          before: null,
          first: limit,
        };
      });
      return;
    }
  };

  const { endCursor, hasNextPage, hasPreviousPage, startCursor } =
    dataProps.pageInfo;
  const [rowCountState, setRowCountState] = React.useState(
    dataProps.repoCount || 0
  );

  const nextPageHandler = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    if (hasNextPage === false) {
      e.currentTarget.disable = true;
      e.currentTarget.color = "gray";
      return;
    }
    setOptions((prevState) => {
      return {
        ...prevState,
        name: searchInp,
        first: limit,
        after: endCursor,
        last: null,
      };
    });

    setCounters((prevState) => {
      return {
        ...prevState,
        first: prevState.first + limit,
        last: prevState.last + limit,
      };
    });
  };
  const prevPageHandler = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    if (hasPreviousPage === false) {
      e.currentTarget.disable = true;
      return;
    }
    setOptions((prevState) => {
      return {
        ...prevState,
        name: searchInp,
        first: null,
        before: startCursor,
        last: limit,
      };
    });
  };
  if (counters.last > rowCountState) {
    setCounters((prevState) => {
      return {
        ...prevState,
        first: rowCountState - dataProps.transform.length,
        last: rowCountState,
      };
    });
  }
  return (
    <Box width="100%" padding="24px 16px 0px 24px">
      <Typography sx={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
        Результаты поиска
      </Typography>
      <div style={{ width: "100%" }} key={"divblock"}>
        <Grid
          container
          color="rgba(0, 0, 0, 0.87)"
          fontSize="0.875rem"
          fontWeight="400"
          lineHeight="143%"
          display="flex"
          width="100%"
          sx={{ wordBreak: "break-all" }}
          key="uniqueKeyNameForGrid"
        >
          {columns.map((el, indx) => (
            <Grid
              key={el.uniq + indx}
              item
              columns={5}
              padding="10px 16px 16px 10px"
              flexBasis="20%"
              borderBottom="1px solid rgba(0, 0, 0, 0.12)"
              borderRadius="0px"
            >
              <div
                key={el.headerName}
                onClick={(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  handleOrderBy(ev, el.field);
                }}
              >
                {el.headerName}
              </div>
            </Grid>
          ))}

          {dataProps?.transform?.map(
            (items: IprocessingIncomingData, indx: number) => {
              return (
                <Grid
                  item
                  columns={5}
                  flexBasis="100%"
                  key={indx + items.name + items.id + indx}
                  onClick={rowOnClick}
                  display="flex"
                  id={items.id}
                  borderBottom="1px solid rgba(0, 0, 0, 0.12)"
                >
                  <Item>{items.name}</Item>
                  <Item>{items.langForRow}</Item>
                  <Item>{items.forksCount}</Item>
                  <Item>{items.stargazersCount}</Item>
                  <Item>{items.updatedAt}</Item>
                </Grid>
              );
            }
          )}
          <Box
            display="flex"
            alignItems="center"
            padding="1rem 0"
            justifyContent="flex-end"
            width="100%"
          >
            <Box display="flex" alignItems="center" mr="26px">
              <TypographyElement>Rows per page:</TypographyElement>
              <RowsSelect
                options={[
                  { value: 25, name: "25" },
                  { value: 50, name: "50" },
                  { value: 100, name: "100" },
                ]}
                value={limit}
                onChange={(value: number) => setLimit(Number(value))}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <TypographyElement>
                {counters.first} - {counters.last} of {rowCountState}
              </TypographyElement>
              <Button sx={{ color: "black" }} onClick={prevPageHandler}>
                <ArrowBackIosIcon />
              </Button>
              <Button sx={{ color: "black" }} onClick={nextPageHandler}>
                <ArrowForwardIosIcon />
              </Button>
            </Box>
          </Box>
        </Grid>
      </div>
    </Box>
  );
};

export default QueryResultTable;
