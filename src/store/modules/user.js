import { login } from '@/api/user'
const state = {
  token: null
}
const mapMutations = {
  setToken (state, payload) {
    state.token = payload
  }
}
const actions = {
  async login (context, payload) {
    try {
      const res = await login(payload)
      console.log(res)
      context.commit('setToken', res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mapMutations,
  actions
}
