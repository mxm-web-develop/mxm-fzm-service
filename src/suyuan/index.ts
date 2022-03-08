import axios, { AxiosInstance, AxiosResponse } from "axios";
import { LocLogin, test_dec } from "../decorators/usrGurad";
import { IsSetPwd_REQ, KeyAdd_REQ, Login_REQ, KeyList_REQ } from "./req.types";
import { response_interceptor } from "./helps";
import { setStore } from "mxm-usrstorage";
import {
  KeyAdd_RES,
  keyList_RES,
  Login_RES,
  ResConstruction,
} from "./res.types";

import constants from "./constants";
class Suyuan {
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
  userModule = () => new User(this._url, this._config);
}

//用户模块
class User extends Suyuan {
  constructor(url, config?) {
    super(url, config);
  }
  /**
   * 用户登录
   * @property id:某个东西
   *
   * @param {Login_REQ}
   * @returns {Login_RES}
   */
  async login(data: Login_REQ): Promise<Login_RES> {
    const res = await this._axios.post<unknown, Login_RES>(
      constants.user.login,
      data
    );
    if (res) {
      setStore({
        app: this.constructor.name,
      });
    }
    return res;
  }
  /**
   * 是否设置过密码
   * @typeParam
   * @returns {is_set_pwd: number}
   */
  async isSetPwd(data: IsSetPwd_REQ): Promise<{ is_set_pwd: number }> {
    return await this._axios.post<unknown, { is_set_pwd: number }>(
      constants.user.isSetPwd,
      data
    );
  }
  /**
     * 添加用户接口密钥
     * ```ts
     *      const res = await keyAdd({
            "app_id": "string",
            "app_key": "string"
            })
     * ```
     * @param data {@link KeyAdd_REQ}
     * @return 
     * ```json
     *   {
                "id": 0,
                "user_id": 0,
                "app_id": "string",
                "app_key": "string",
                "app_secret": "string"
        }
     * 
     * ```
    */
  async keyAdd(data: KeyAdd_REQ): Promise<KeyAdd_RES> {
    return await this._axios.post<unknown, KeyAdd_RES>(
      constants.user.keyAdd,
      data
    );
  }

  /**
   * 删除用户接口密钥
   * @param id number
   * @returns
   */
  async keyDelete(id: number): Promise<{ id: number }> {
    return await this._axios.delete<unknown, { id: number }>(
      constants.user.keyDelete,
      {
        params: id,
      }
    );
  }
  /**
   * 查询用户接口密钥列表
   * @param keyList_REQ.page 设置页数
   * @returns
   */
  async keyList(data: KeyList_REQ): Promise<keyList_RES> {
    return await this._axios.post<unknown, keyList_RES>(
      constants.user.keyList,
      data
    );
  }
}

export default Suyuan;
