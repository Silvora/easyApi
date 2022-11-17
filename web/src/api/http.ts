import axios from "axios"

const http = axios.create({
    baseURL: "http://127.0.0.1:55667",
    timeout: 5000
})


http.interceptors.request.use(config => {
    return config
}, (err) => {
    return Promise.reject(err)
})

http.interceptors.response.use(resp => {
    return resp.data
}, (err) => {
    return Promise.reject(err)
})




export default http