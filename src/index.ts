import axiosAdapter from "./adapters/AxiosAdapter";
import fetchAdapter from "./adapters/FetchAdapter";
import { IAdapter } from "./adapters/IAdapter";

const adapterMap = {
  axios: axiosAdapter,
  fetch: fetchAdapter
};
class Obtain {
  private mode: "axios" | "fetch";
  adapter: IAdapter;
  constructor(mode: "axios" | "fetch" = "axios") {
    this.mode = mode;
    this.adapter = adapterMap[mode];
  }

  get(url: string, options?: any) {
    return this.adapter.get.apply(this, arguments);
  }
}

export default Obtain;
