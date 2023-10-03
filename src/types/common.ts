export interface iMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: iMeta;
};

export type ResponseErrorType = {
  statusCode?: number;
  message?: string;
  errorMessages?: IResponseErrorMessage[];
};

export type IResponseErrorMessage = {
  path: string | number;
  message: string;
};

export interface IDepartments {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
