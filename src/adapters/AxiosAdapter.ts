import axios from "axios";
import { IAdapter } from "./IAdapter";

class AxiosAdapter implements IAdapter {
  constructor() {}
  get() {
    return axios.get.apply(this, arguments);
  }
  post() {
    return axios.post.call(this, arguments);
  }
}

export { AxiosAdapter };
export default new AxiosAdapter();
