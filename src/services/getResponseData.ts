import { IResponse, IResponseData, IprocessingIncomingData } from "./types";

export const processingIncomingData = (
  res: IResponse
): IprocessingIncomingData[] => {
  console.log(res?.search?.edges, "res transform response");
  console.log(typeof res.search, "res standart");
  const transform = res?.search?.edges.map(
    (el: IResponseData, index: number): IprocessingIncomingData => {
      return {
        id: index,
        name: el?.node?.name ?? "",
        desc: el?.node?.description,
        forksCount: el?.node?.forks?.totalCount,
        langForRow: el?.node?.languages?.nodes[0]?.name ?? "",
        langs: el?.node?.languages?.nodes,
        license: el?.node?.licenseInfo?.name ?? null,
        stargazersCount: el?.node?.stargazers?.totalCount,
        updatedAt: el?.node?.defaultBranchRef?.target?.committedDate.replace(
          /^(\d{4})-(\d{2})-(\d{2}).+$/,
          "$1.$2.$3"
        ),
      };
    }
  );
  console.log(transform, "transfrom");
  return transform;
};
