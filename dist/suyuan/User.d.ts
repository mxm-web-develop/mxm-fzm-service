import { IsSetPwd_REQ, KeyAdd_REQ, Login_REQ, KeyList_REQ } from "./req.types";
import { KeyAdd_RES, keyList_RES, Login_RES } from "./res.types";
import Common from "../common";
declare class User extends Common {
    constructor(url: any, config?: any);
    login(data: Login_REQ): Promise<Login_RES>;
    isSetPwd(data: IsSetPwd_REQ): Promise<{
        is_set_pwd: number;
    }>;
    keyAdd(data: KeyAdd_REQ): Promise<KeyAdd_RES>;
    keyDelete(id: number): Promise<{
        id: number;
    }>;
    keyList(data: KeyList_REQ): Promise<keyList_RES>;
}
export default User;
