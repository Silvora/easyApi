import http from "./http";


export function AddPathUrl(data:any):any {
    return http.request({
        url: "/path",
        method: "Post",
       // headers: { ...data.headers },
        data
    })
}


export function AddMokeJson(data:any):any {
    return http.request({
        url: "/path/moke",
        method: "Post",
       // headers: { ...data.headers },
        data
    })
}


//get
export function GetData(url:any):any{
    return http.request({
        url: url,
        method: "Get",
       // headers: { ...data.headers },
        //data
    })
}

//post
export function PostData(url:any,data:any):any{
    return http.request({
        url: url,
        method: "Post",
       // headers: { ...data.headers },
        data
    })
}

//post
export function PutData(url:any,data:any):any{
    return http.request({
        url: url,
        method: "Put",
       // headers: { ...data.headers },
        data
    })
}


//delete
export function DeleteData(url:any):any{
    return http.request({
        url: url,
        method: "Delete",
       // headers: { ...data.headers },
       // data
    })
}