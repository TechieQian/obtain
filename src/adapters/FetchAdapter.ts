import { IAdapter } from "./IAdapter";

class FetchAdapter implements IAdapter {
  constructor() {}
  get(url: string, options?: any) {
    return fetch(url, options);
  }
  post(url, data?: any, options?: any) {
    let postOptions = Object.assign({ method: "POST", data }, options);
    return fetch(url, postOptions);
  }
}

export { FetchAdapter };
export default new FetchAdapter();
