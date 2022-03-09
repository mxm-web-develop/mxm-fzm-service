import Common from "./common";
import Suyuan from "./suyuan";
import Browser from "./browser";

interface Coinfg {
  options?: any;
}
class FZMAPI {
//   Common: Common;
//   Suyuan: Suyuan;
//   Browser: Browser
  _url: string;
  _config : Coinfg | undefined;
 // protected config: Coinfg | undefined;
  constructor(url: string, config?: Coinfg | undefined) {
    this._url = url;
    this._config = config;
    // this.Common = new Common(url,this.config);
    // this.Browser = new Browser(url,this.config);
    // this.Suyuan = new Suyuan(url,this.config);
  }
  SuyuanModlue = ()=> new Suyuan(this._url,this._config);

}

export {
    Common as commonApi,
    Suyuan as suyuanApi,
    Browser as browserApi
}

export default FZMAPI;
