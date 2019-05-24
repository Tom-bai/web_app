import Vue from 'vue'
import axios from 'axios'
axios.defaults.timeout = 30 * 1000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = 'http://shop.xfengle.com' // 接口域名
axios.defaults.withCredentials = true
// POST传参序列化(添加请求拦截器)
axios.defaults.baseURL = '/api' //跨域
axios.interceptors.request.use(
    config => {
        // if (config.method === 'post') {
        //     config.data = qs.stringify(config.data)
        // }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
axios.interceptors.response.use(
    res => {
        return res
    },
    err => {
        var originalRequest = err.config
        if (err.code == 'ECONNABORTED' && err.message.indexOf('timeout')!=-1 && !originalRequest._retry) {
            originalRequest._retry = true
            toast('链接超时，请检查网络！')
            return Promise.reject(err)
        }
    }
)
// 发送请求
export function post(url, params, msg) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: params
        }).then(
            res => {
                resolve(res.data)
        })
        .catch(
            err => {
                reject(err.data)
        })
    })
}
export function get(url, params, msg) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            data: params
        }).then(
            res => {
                resolve(res.data)
        })
        .catch(
            err => {
                reject(err)
        })
    })
}