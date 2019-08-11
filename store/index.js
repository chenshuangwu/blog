import qs from 'qs'
export const state = () => ({
 login: false

})

export const mutations = {

  SET_LOGIN(state, login) {
    state.login = login
  },

}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // if (req.headers && req.headers.cookie) {
    //   const cookie = cookieToJson(req.headers.cookie)
    //   commit('SET_LOGIN', cookie.login)
    // }
  },
  async actionLogin(context, {
    username,
    password,
    success,
    fail
  }) {
    const loginData = await this.$axios.$post('http://api.chensw.top/login', 
    qs.stringify({
        username: username,
        password: password
      })
    )
    if (loginData.status) {
      context.commit('SET_LOGIN', loginData.status)
      success(loginData.status)
    } else {
      fail(loginData)
    }
  }

}

// 转换cookie为json字符串
function cookieToJson(cookie) {
    const cookieArr = cookie.split('; ')
    const obj = {}
    cookieArr.forEach(function (i) {
      const arr = i.split('=')
      // arr[1] = https%3A%2F%2Fapi.lovenovelapp.com%2Fuser%2Ficon.png%3Fid%3D101025
      // cookie中路径被encodeURIComponent编码了，需要解码
      arr[1] = decodeURIComponent(arr[1])
      obj[arr[0]] = arr[1]
    })
    return obj
  }
