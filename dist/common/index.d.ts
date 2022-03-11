import { AxiosInstance } from "axios";
declare class Common {
    protected _axios: AxiosInstance;
    protected _url: any;
    protected _config: any;
    constructor(url: string, config?: any);
}
export default Common;
