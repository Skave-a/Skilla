export interface IFetchData {
  results: ITableData[] | never[];
}

export interface ITableData {
  record: string;
  partnership_id: string;
  status: string;
  person_avatar: string;
  time: number;
  source: string;
  id: number;
  from_number: string;
  date: string;
}
