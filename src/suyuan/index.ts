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
import User from "./User";
import Common from "../common";
class Suyuan extends Common {
  static  _version: string
  constructor(url: string, config?: any) {
    super(url, config);
    Suyuan._version ='v.1.0.1'
    // this.userModule = new User(this._url, this._config);
  }
  userModule = () => new User(this._url, this._config);
}

export default Suyuan;
