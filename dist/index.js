import t from"axios";class e{constructor(t,e){}dosome(){console.log(111)}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function o(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}class s{_axios;_url;_config;constructor(e,o){o&&o.url?(this._url=o.url,this._axios=t.create({baseURL:o.url,...o})):(this._url=e,this._axios=t.create({baseURL:e,...o})),this._config=o,this._axios.interceptors.response.use((t=>(t=>{if(200===t.status&&"OK"===t.statusText)return t.data;throw new Error(t.statusText)})(t)),(t=>Promise.reject(t)))}userModule=()=>new r(this._url,this._config)}class r extends s{constructor(t,e){super(t,e)}async login(t){return await this._axios.post("/api/user/login",t)}}!function(t,e,o,s){var r,n=arguments.length,i=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(n<3?r(i):n>3?r(e,o,i):r(e,o))||i);n>3&&i&&Object.defineProperty(e,o,i)}([function(t,e,o){console.log(t)},o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",Promise)],r.prototype,"login",null);class n{constructor(t,e){}kill(){console.log(222)}}class i{Common;Suyuan;Browser;config;constructor(t,o){this.config=o,this.Common=new e(t,this.config),this.Browser=new n(t,this.config),this.Suyuan=new s(t,this.config)}}export{n as browserApi,e as commonApi,i as default,s as suyuanApi};
