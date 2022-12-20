export class GetPagedResult<T> {
    [x: string]: any;
    //[x: string]: any;
    total: number;
    offset: number;
    limit: number;
    items: T[];
  }
  