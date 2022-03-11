import Common from "./common";
import Suyuan from "./suyuan";
import Browser from "./browser";
interface Coinfg {
    options?: any;
}
declare class FZMAPI {
    _url: string;
    _config: Coinfg | undefined;
    constructor(url: string, config?: Coinfg | undefined);
    SuyuanModlue: () => Suyuan;
}
export { Common as commonApi, Suyuan as suyuanApi, Browser as browserApi };
export default FZMAPI;
