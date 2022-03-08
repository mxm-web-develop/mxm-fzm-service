import { AxiosInstance } from "axios";
import { Login } from "./req.types";
declare class Suyuan {
    protected _axios: AxiosInstance;
    protected _url: any;
    protected _config: any;
    constructor(url: string, config?: any);
    userModule: () => User;
}
declare class User extends Suyuan {
    constructor(url: any, config?: any);
    login(data: Login): Promise<{
        id: number;
        token: string;
    }>;
}
export default Suyuan;
