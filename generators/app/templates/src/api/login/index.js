import Api from "../index"
let url = "/api/"

export async function LoginApi(params) {
    return await Api.post(`${url}user/login`, params)
}

export async function userRegister(params) {
    return await Api.post(`${url}user/register`, params)
}
// 注册验证码
export async function sendRegisterCaptcha(params) {
    return await Api.post(`${url}user/sendRegisterCaptcha`, params)
}