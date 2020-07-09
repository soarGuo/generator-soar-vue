import axios from 'axios'
// import qs from 'qs'
import { 
  message
} from 'antd'

const API = {
    path: process.env.NODE_ENV === 'development' ? '' : 'http://www.faogxl.cn'
}
axios.defaults.baseURL = API.path

Object.assign(axios.defaults, {
  headers: {
    post: {
      "Content-Type": "application/json;"
    },
    get: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  },
  timeout: 1000 * 10
})

axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data)
  }
  config.headers.Authorization = localStorage.getItem("config_token") || ""
  return config
}, error => {
  console.log(error, "req errr")
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  if (res.data.code === "403") {
    message.warning("登录过期, 请重新登录")
    return Promise.reject(res);
  }
  return res
}, error => {
  console.log(error, "res errr")
  return Promise.reject(error)
})

export default {
  get: function (url, params, headers) {
    let reqConfig = {
      method: "get",
      url: url,
      params: params
    }
    if (headers) {
      if (headers.timeout) {
        reqConfig.timeout = headers.timeout
        delete headers.timeout
      }
      reqConfig['headers'] = {...headers}
    }
    return axios(reqConfig)
  },
  post: function (url, params, headers) {
    // console.log(url, params)
    let reqConfig = {
      method: "post",
      url: url,
      data: params || {}
    }
    if (headers) {
      if (headers.timeout) {
        reqConfig.timeout = headers.timeout
        delete headers.timeout
      }
      reqConfig['headers'] = {...headers}
    }
    return axios(reqConfig)
  }
}