import Vue from 'vue';

/**
 * 数据管理中心
 */
const state = {
	tableList: [],
	params: {}
};
const getters = {
	tableList (state) {
		return state.tableList;
	}

};
const actions = {
	fetchtableList ({commit,state}) {
		Vue.http.post('/api/getOrderList',state.params).then((res)=>{
			commit('changeOderList',res.data.data.list);
		}, (err)=>{
			console.log("获取数据失败："+err);
		})
	}
};
const mutations = {
	changeOderList (state,newtableList) {
		state.tableList = newtableList;
	},

	changeParams (state,{key,val}) {
		state.params[key] = val;
		console.log(state.params);
	}

};

export default {
	state,
	getters,
	actions,
	mutations
}