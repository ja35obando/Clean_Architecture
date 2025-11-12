declare module "fastily" {
  export interface FastilyRequest {
    body?: any;
    params?: Record<string, any>;
    query?: Record<string, any>;
    headers?: Record<string, string>;
  }

  export interface FastilyResponse {
    status(code: number): this;
    json(body: any): void;
  }

  export {};
}
