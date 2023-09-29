import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GET_REP } from "./graphQuery";
import { processingIncomingData } from "./getResponseData";
import { IResponse, IprocessingIncomingData } from "./types";
import { SearchRepoQueryVariables } from "src/__generated__/graphql";
export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: import.meta.env.VITE_QUERY_URL,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${import.meta.env.VITE_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getRepos: build.query<IprocessingIncomingData[], SearchRepoQueryVariables>({
      query: (name) => {
        console.log(name, "api data");
        return {
          document: GET_REP,
          variables: {
            name,
          },
        };
      },
      transformResponse: (res: IResponse) => {
        return processingIncomingData(res);
      },
    }),
  }),
  reducerPath: "githubApi",
});
export const { useGetReposQuery } = api;
