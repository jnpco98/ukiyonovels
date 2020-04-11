export interface BaseQuery {
  page?: number;
  count?: number;
  order?: string;
  sort?: string;
}

export default interface Entity {
  lastModified: number;
}
