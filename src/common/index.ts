import axios, { AxiosInstance } from "axios";
import { response_interceptor } from "../suyuan/helps";


class Common {
    protected _axios: AxiosInstance;
    protected _url;
    protected _config;
    constructor(url: string, config?: any) {
        if (config && config.url) {
          this._url = config.url;
          this._axios = axios.create({
            baseURL: config.url,
            ...config,
          });
        } else {
          this._url = url;
          this._axios = axios.create({
            baseURL: url,
            ...config,
          });
        }
        this._config = config;
        this._axios.interceptors.response.use(
          (response) => {
            let res = response_interceptor(response);
            return res;
          },
          (err) => {
            return Promise.reject(err);
          }
        );
    }
}

export default Common;