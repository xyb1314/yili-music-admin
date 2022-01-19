import Cookies from 'js-cookie'

const TokenKey = 'yuanli-token'

export const getToken = () => {
  return Cookies.get(TokenKey)
}

export const setToken = token => {
  return Cookies.set(TokenKey, token)
}

export const removeToken = () => {
  Cookies.remove(TokenKey)
}
