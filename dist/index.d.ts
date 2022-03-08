import Common from "./common";
import Suyuan from "./suyuan";
import Browser from "./browser";
interface Coinfg {
    options?: any;
}
declare class FZMAPI {
    Common: Common;
    Suyuan: Suyuan;
    Browser: Browser;
    protected config: Coinfg | undefined;
    constructor(url: string, config?: Coinfg | undefined);
}
export { Common as commonApi, Suyuan as suyuanApi, Browser as browserApi };
export default FZMAPI;
