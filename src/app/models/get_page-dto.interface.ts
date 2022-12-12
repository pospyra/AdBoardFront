export interface GetPagedResult<T> {
    [x: string]: any;
    total: number;
    offset: number;
    limit: number;
    items: T[];
  }
  