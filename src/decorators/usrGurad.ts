import {getStore,USR} from 'mxm-usrstorage'
export function test_dec(appName: string){
    // const user = getStore<USR<any>>(appName)
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(target);
        
        
    }
}

export function LocLogin(appName: string){
    // const user = getStore<USR<any>>(appName)
    return async function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(descriptor.value);
        const data = descriptor.value
  
        
    }
}