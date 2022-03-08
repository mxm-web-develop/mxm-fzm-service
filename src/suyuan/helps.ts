//项目工具类函数
import { ResConstruction } from "./res.types";
import { AxiosResponse } from 'axios'

export const response_interceptor = <T>(res:AxiosResponse<T>)=>{
    if(res.status === 200 && res.statusText === 'OK'){
        return res.data
    }else{
        throw new Error(res.statusText)
    }
}