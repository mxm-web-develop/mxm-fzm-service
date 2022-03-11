export interface Login_REQ {
    country?: string;
    email?: string;
    code?: string;
    login_type: number;
    phone?: string;
    pwd?: string;
}
export interface IsSetPwd_REQ {
    "country": string;
    "phone": string;
    "email": string;
}
export interface KeyAdd_REQ {
    "app_id": string;
    "app_key": string;
}
export interface KeyList_REQ {
    "page": number;
    "page_size": number;
}
