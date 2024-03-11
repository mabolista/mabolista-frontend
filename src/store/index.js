import { createStore } from 'vuex'
import axios from 'axios'
import router from '/src/router'

export default createStore({
  state: {
    token: null,
    user: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'https://staging-mabolista.vercel.app/api/login',
          credentials
        )
        const { token, user } = response.data

        commit('setToken', token)
        commit('setUser', user)

        localStorage.setItem('token', token)
        this.$router.push({ name: 'homeauth' })
      } catch (error) {
        console.error('Login failed:', error)
      }
    },

    logout({ commit }) {
      commit('setToken', null)
      commit('setUser', null)

      localStorage.removeItem('token')

      router.push('/login')
    },

    async register({ commit }, userData) {
      try {
        const response = await axios.post(
          'https://staging-mabolista.vercel.app/api/register',
          userData
        )
        const { token, user } = response.data

        commit('setToken', token)
        commit('setUser', user)

        localStorage.setItem('token', token)

        router.push('/login')
      } catch (error) {
        console.error('Registration failed:', error)
      }
    }
  }
})
