import { InputMaybe, Maybe } from "src/__generated__/graphql";

// Описание интерфейса response getRepos запроса
type TtotalCount = {
  totalCount: string;
};
export interface IResponseData {
  node: {
    defaultBranchRef: { target: { committedDate: string } };
    description: string;
    forks: TtotalCount;
    languages: { nodes: [{ name: string }] };
    licenseInfo: { name: string };
    name: string;
    stargazers: TtotalCount;
    url: string;
  };
}
export interface IResponse {
  res: {};
  search: {
    edges: Array<IResponseData>;
    pageInfo?: {
      endCursor?: boolean;
      startCursor?: boolean;
      hasNextPage?: string;
      hasPreviousPage?: string;
    };
    repositoryCount?: number;
  };
}

// Описание интерфейса response после transformResponse
export interface IprocessingIncomingData {
  transform: {
    id: number;
    name: string;
    desc: string;
    forksCount: string;
    langForRow: string;
    langs: [{ name: string }];
    license: string;
    stargazersCount: string;
    updatedAt: string;
  };

  pageInfo?: {
    endCursor?: boolean;
    startCursor?: boolean;
    hasNextPage?: string;
    hasPreviousPage?: string;
  };
  repoCount?: number;
}

// Типизация пропсов компонента Detailed info
export interface IDetailedInfo {
  currentRow: {
    name: string;
    desc: string;
    license: string;
    langForRow: string;
    stargazersCount: string;
    langs: [];
  };
  currentRowClick: boolean;
}
export interface IOptions {
  name?: string | null | undefined;
  after?: InputMaybe<string> | string | null | undefined;
  first?: InputMaybe<number> | number | null | undefined;
  before?: InputMaybe<string> | string | null | undefined;
  last?: InputMaybe<number> | number | null | undefined;
  prevState: {};
}

// Типизация пропсов компонента QueryResultTable
export interface IQueryResultTable {
  dataProps: IprocessingIncomingData[];
  currentRow: {
    name: string;
    license: string;
  };
  setCurrentRow: (currentRow: IprocessingIncomingData) => void;
  setCurrentRowClick: (currentRowClick: boolean) => void;
  limit: number;
  setLimit: (limit: number) => void;
  searchInp: string | null;
  setOptions: (obj: IOptions) => void;
  toggle: boolean;
  setToggle: (prev: boolean) => boolean;
  counters: { first: number; last: number };
  setCounters: React.Dispatch<
    React.SetStateAction<{ first: number; last: number }>
  >;
}
