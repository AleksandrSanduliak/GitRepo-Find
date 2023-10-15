import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GET_REP } from "./graphQuery";
import { processingIncomingData } from "./getResponseData";
import { IResponse, IprocessingIncomingData } from "./types";
import { SearchRepoQueryVariables } from "src/__generated__/graphql";
import { ClientError } from "graphql-request";

const baseQuery = graphqlRequestBaseQuery<
  Partial<ClientError & { originalStatus: number }>
>({
  url: import.meta.env.VITE_QUERY_URL,
  prepareHeaders: (headers) => {
    headers.set("authorization", `Bearer ${import.meta.env.VITE_API_KEY}`);
    return headers;
  },
});
const baseQueryAuthHandle: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if (result?.error?.originalStatus === 401) {
    console.log(result.error);
  }
  return result;
};

export const api = createApi({
  reducerPath: "githubApi",
  baseQuery: baseQueryAuthHandle,
  endpoints: (build) => ({
    getRepos: build.query<IprocessingIncomingData[], SearchRepoQueryVariables>({
      query: ({ name, after, first, before, last }) => {
        console.log(last, first, "last first");
        return {
          document: GET_REP,
          variables: {
            name,
            after,
            first,
            before,
            last,
          },
        };
      },
      transformResponse: (res: IResponse) => {
        console.log(res, "res");
        return processingIncomingData(res);
      },
    }),
  }),
});
export const { useGetReposQuery } = api;
