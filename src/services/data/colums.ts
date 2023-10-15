interface IComuns {
  field: string;
  headerName: string;
  toggleStatus?: boolean;
}
export const columns: IComuns[] = [
  {
    field: "name",
    headerName: "Имя",
    uniq: "fsfdsfds",
  },
  { field: "langForRow", headerName: "Язык" },
  {
    field: "forks",
    headerName: "Число форков",
    toggleStatus: true,
    uniq: "fdsfdsxxx",
  },
  {
    field: "stars",
    headerName: "Число звезд",
    toggleStatus: true,
    uniq: "ytuyt",
  },
  {
    field: "updated",
    headerName: "Дата обновления",
    toggleStatus: true,
    uniq: "aaaaa",
  },
];
