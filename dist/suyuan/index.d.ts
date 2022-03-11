import User from "./User";
import Common from "../common";
declare class Suyuan extends Common {
    static _version: string;
    constructor(url: string, config?: any);
    userModule: () => User;
}
export default Suyuan;
