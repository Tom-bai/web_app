import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
axios.defaults.timeout = 30 * 1000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://shop.xfengle.com' // 接口域名
axios.defaults.withCredentials = true
// POST传参序列化(添加请求拦截器)
axios.defaults.baseURL = '/api' //跨域
axios.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }
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
        // let loading = Toast.loading({
        //     duration: 0,       // 持续展示 toast
        //     forbidClick: true, // 禁用背景点击
        //     loadingType: 'spinner',
        //     message: msg || '加载中...'
        // });
        axios({
            method: 'post',
            url: url,
            data: params
        }).then(
            res => {
                // loading.clear()
                resolve(res.data)
        })
        .catch(
            err => {
                // loading.clear()
                reject(err.data)
        })
    })
}
export function get(url, params, msg) {
    return new Promise((resolve, reject) => {
        // let loading = Toast.loading({
        //     duration: 0,       // 持续展示 toast
        //     forbidClick: true, // 禁用背景点击
        //     loadingType: 'spinner',
        //     message: msg || '加载中...'
        // });
        axios({
            method: 'get',
            url: url,
            params: params
        }).then(
            res => {
                // loading.clear()
                resolve(res.data)
        })
        .catch(
            err => {
                // loading.clear()
                reject(err)
        })
    })
}
export function formatTime(date, fmt) { // 格式化时间
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substring(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
}
export function toast(message) {
    Toast({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: message
    });
    let second = 1
    const timer = setInterval(() => {
        second--
        if (!second) {
            clearInterval(timer)
            Toast.clear()
        }
    }, 1500);
}
function padLeftZero(str) {
    return ('00' + str).substring(str.length)
}