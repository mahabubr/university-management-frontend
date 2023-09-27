export interface iMeta {
  limit: number;
  page: number;
  size: number;
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
