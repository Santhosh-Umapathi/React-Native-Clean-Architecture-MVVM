export interface HttpManager {
  get: (url: string) => Promise<any>;
  put: (url: string, payload: object) => Promise<any>;
  post: (url: string, payload: object) => Promise<any>;
  delete: (url: string) => Promise<any>;
}
