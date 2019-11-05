import { req } from '@/utils/http'
import apiUrl from '@/api/urlPath.js'
export default {
	namespaced: true,
	state: {
		data: [],
		userList: []
	},
	getters: {
		getData(state) {
			return state.data
		},
		getUserList(state) {
			return state.userList
		}
	},
	mutations: {
		GET_DATA(state, data) {
			state.data = data
		},
		INIT_USER_LIST(state, data) {
			state.userList = data
		}
	},
	actions: {
		updateData({ commit }) {
			console.assert(true, commit, req, apiUrl)
			let path = apiUrl.home.getData
			req.get(path).then((res) => {
				let data = res.data.result
				commit('INIT_USER_LIST', data)
			})
		}
	}
}
