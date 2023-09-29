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
  res: { search: { edges: Array<IResponseData> } };
}

// Описание интерфейса response после transformResponse
export interface IprocessingIncomingData {
  id: number;
  name: string;
  desc: string;
  forksCount: string;
  langForRow: string;
  langs: [{ name: string }];
  license: string;
  stargazersCount: string;
  updatedAt: string;
}

// Типизация пропсов компонента Detailed info
export interface IDetailedInfo {
  currentRow: {
    name: string;
    desc: string;
    license: string;
    langForRow: string;
    stargazersCount: string;
    langs: any;
  };
  currentRowClick: boolean;
}

// Типизация пропсов компонента QueryResultTable
export interface IQueryResultTable {
  dataProps: IprocessingIncomingData[];
  currentRow: {
    name: string;
    desc: string;
    license: string;
  };
  setCurrentRow: (currentRow: IprocessingIncomingData) => void;
  setCurrentRowClick: (currentRowClick: boolean) => void;
}
