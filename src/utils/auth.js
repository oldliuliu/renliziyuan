import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const Timekey = 'hrsaas-timestamp-key'// 设置一个独一无二的key

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

// 存时间戳
export function setTime (time) {
  return Cookies.set(Timekey, time)
}
// 取时间戳
export function getTime () {
  return Cookies.get(Timekey)
}
