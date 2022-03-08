export interface ResConstruction<T> {
    "trace_id": string,
    "code": number,
    "msg": string,
    "data": T
}

export interface Login_RES{id:number,token:string}
export interface KeyAdd_RES{
    "id": 0,
    "user_id": 0,
    "app_id": string,
    "app_key": string,
    "app_secret": string
}

interface keyItem {
    "id": number,
    "user_id": number,
    "app_id": string,
    "app_key": string,
    "app_secret": string
}

export interface keyList_RES{
    /** 总数 */
    "total": number,
    /** 列表详细信息 */
    "results": keyItem[]
}